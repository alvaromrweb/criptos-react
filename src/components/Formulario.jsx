import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width:100%;
    padding: 10px;
    color: white;
    font-weight:700;
    text-transform: uppercase;
    font-size:20px;
    border-radius: 5px;
    transition: background-color .3s ease-in;
    cursor: pointer;
    margin-top:20px;

    &:hover {
        background-color: #7a7dfe;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    
    useEffect(() => {
        const consultarApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            
            const arrayCriptos = resultado.Data.map(cripto => {

                const obj = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return obj
            })
            setCriptos(arrayCriptos)
        }

        consultarApi()
    }, [])

    const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu criptomoneda', criptos)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if([moneda, criptoMoneda].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({moneda, criptoMoneda})
    }
    return (
        <form onSubmit={handleSubmit}>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <SelectMonedas  />
            <SelectCriptoMonedas />
            <InputSubmit type="submit" value="Cotizar"  />
        </form>
    )
}

export default Formulario