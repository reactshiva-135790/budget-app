import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px;
   width: 100%;
`
const BalanceBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`

const AddTransaction = styled.button`
background-color : black;
color: white;
padding: 10px 5px;
border-radius: 4px;
cursor: pointer;
font-weight: bold;
font-size:15px;
`

const AddTransactionContainer = styled.button`
display : flex;
flex-direction: column;
border : 1px solid black;
gap: 10px;
padding : 15px 20px;
margin : 10px 20px;
& input{
    outline: none;
    padding : 10px 12px;
    border-radius: 4px;
    border : 1px solid black;
}
`
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const ExpenseContainer = styled.div`
display : flex;
flex-direction: row;
gap: 12px;
margin: 20px;
`

const ExpenseBox = styled.div`
 display : flex;
flex-direction: column;
border-radius: 4px;
border : 1px solid black;
padding : 15px 20px;
width: 135px;
font-size: 15px;
& span {
    font-weight: bold;
    font-size: 20px;
}
`

const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");

    const addTransaction = () => {
        props.addTransaction({ amount: Number(amount), desc, type, id: Date.now(), })
        console.log({ amount, desc, type, })
        props.toggleAddTxn()
    }

    return (
        <AddTransactionContainer>
            <input placeholder="amount" type="number"
                value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input placeholder="description" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <RadioBox>
                <input
                    type="radio"
                    id="expense"
                    name="type"

                    value="EXPENSE"
                    checked={type === "EXPENSE"}
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="expense">Expense</label>
                <input
                    type="radio"
                    id="income"
                    name="type"
                    value="INCOME"
                    checked={type === "INCOME"}
                    onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="Expense">Income</label>
            </RadioBox>
            <AddTransaction onClick={addTransaction}>
                Add Transaction
            </AddTransaction>
        </AddTransactionContainer>
    )
};

const OverView = (props) => {

    const [isAddTxnVisibe, toggleAddTxn] = useState(true)
    return (
        <Container>
            <BalanceBox>
                Balance : $ 1000
                <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisibe)}>
                    {isAddTxnVisibe ? "Cancel" : "Add"}
                </AddTransaction>
            </BalanceBox>
            {isAddTxnVisibe && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction} />}
            <ExpenseContainer>
                <ExpenseBox>
                    Expense <span>$1000</span>
                </ExpenseBox>
                <ExpenseBox>
                    Expense <span>$1000</span>
                </ExpenseBox>
            </ExpenseContainer>
        </Container>
    )
}

export default OverView