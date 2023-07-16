import styled from "styled-components"

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 20px;
   font-size: 18px;
   width : 100%;
   gap : 10px;
   font-weight: bold;
   & input {
    padding : 10px 20px;
    border-radius: 10px;
    outline: none;
    border: 1px solid black;
   }
`

const Transation = () => {
    return (
        <Container>
            Transation
            <input placeholder="search"/>
        </Container>
    )
}

export default Transation