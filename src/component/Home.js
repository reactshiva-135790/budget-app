import styled from "styled-components"
import OverView from "./OverView"
import Transation from "./Transation"
import { useState } from "react"

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin : 30px 0 10px;
   width : 360px;
`

const Home = () => {
    const [transaction, updateTransaction]= useState([])

    const addTransaction = (payload) => {
        const transactionArray = [...transaction]
        transactionArray.push(payload);
        updateTransaction(transactionArray)
    }

    return (
        <Container>
            <OverView addTransaction={addTransaction} />
            <Transation transaction={transaction} />
        </Container>
    )
}

export default Home