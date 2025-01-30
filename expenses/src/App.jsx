import { useState, useEffect } from 'react'
import axios from 'axios'
import TransactionList from './components/TransactionList'
import IncExpContainer from './components/IncExpContainer'
import NewTransactionForm from './components/NewTranscationForm'
const App = (props) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    
        const response = await axios.get("https://expen-h5ls.onrender.com");
        console.log(response.data);  
        setTransactions(response.data); 
     
    }

    fetchData();
},[]);



const removeFromList = (index) => {
  console.log('removeFromList', index)
  const newTransactions = transactions.filter((txn, i) => i !== index)
  setTransactions(newTransactions)
}

const addToList = (title, amount) => {
  setTransactions([...transactions, {title:title, amount:amount}])
}
  return (
    <div className="container">
      <h3>Expense Tracker</h3>
      <IncExpContainer transactions = {transactions}/>
      <TransactionList transactions ={transactions} removeFromList={removeFromList}/>
      <NewTransactionForm addToList = {addToList}/>
    </div>
  )
  
}

export default App