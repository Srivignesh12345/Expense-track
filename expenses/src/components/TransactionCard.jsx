const TransactionCard = (props) => {
    const { title, amount, onDelete, removeFromList, index } = props;
    const colorClass = amount >= 0 ? 'positive' : 'negative';

    const deleteTxn = () => {
        removeFromList(index);
        
    }


    return (
        <div className="transaction-card-container">
            <div className={`transaction-card ${colorClass}`}>
                <span>{title}</span>
                <span>${Number(amount).toFixed(2)}</span>
            </div>
            <div className="btn-container">
                <button onClick={deleteTxn}>Delete</button>
            </div>
        </div>
    );
};

export default TransactionCard;
