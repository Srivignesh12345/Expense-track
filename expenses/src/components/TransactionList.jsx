import TransactionCard from "./TransactionCard"
const TransactionList = (props) => {

    return (
       <>
        <h5>Transactions</h5>
        <hr />
        {props.transactions.map((transaction, index) => (
            <TransactionCard 
                key={index} 
                index={index}
                title={transaction.title} 
                amount={transaction.amount} 
                className={transaction.amount < 0 ? 'negative' : 'positive'}
                removeFromList={props.removeFromList}
            />
        ))}
       </>
    )
}
export default TransactionList
