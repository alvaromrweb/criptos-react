import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    color: white;
    padding:15px;
    font-size:20px;
    text-transform:uppercase;
    font-family:'Lato', sans-serif;
    font-weight:bold;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error