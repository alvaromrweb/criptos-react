import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;
    display:flex;
    align-items: center;
    gap: 1rem;
    margin-top:30px;
`
const Texto = styled.p`
    font-size:18px;
    span {
        font-weight:700;
    }
`

const Precio = styled.p`
    font-size:30px;
    span {
        font-weight:700;
    }
`

const Imagen = styled.img`
    display:block;
    width:150px;
`

const Resultado = ({resultadoCotizacion}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultadoCotizacion
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com${IMAGEURL}`} alt='imagen cripto' />
        <div>
            <Precio>Precio: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación ultimas 24h: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>

        </div>
    </Contenedor>
  )
}

export default Resultado