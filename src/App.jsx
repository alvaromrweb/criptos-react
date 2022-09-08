import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImgCrypto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Heading = styled.h1`
  font-family:'Lato', sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width:100px;
    height:6px;
    background-color: #66a2fe;
    display:block;
    margin: 10px auto 0 auto;
  }
`
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width:992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display:blocK;
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultadoCotizacion, setResultadoCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {

      const cotizarEnApi = async () => {
          setCargando(true)
          setResultadoCotizacion({})
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptoMoneda}&tsyms=${monedas.moneda}`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setResultadoCotizacion(resultado.DISPLAY[monedas.criptoMoneda][monedas.moneda])
          setCargando(false)
      }
  
      cotizarEnApi()
    }
  }, [monedas])
  

  return (
    <Contenedor>
      <Imagen src={ImgCrypto} alt='Imagenes criptonmonedas' />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {resultadoCotizacion.PRICE && <Resultado resultadoCotizacion={resultadoCotizacion} />}
      </div>
      
    </Contenedor>
  )
}

export default App
