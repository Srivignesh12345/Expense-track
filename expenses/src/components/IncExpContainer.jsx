const IncExpContainer = (props) => {
    const { transactions } = props;
    let income = 0;
    let expense = 0;

    transactions.forEach((txn) => { 
        // Convert txn.amount to a number
        const amount = Number(txn.amount); // or you can use parseFloat(txn.amount)

        if (amount >= 0) {
            income += amount;
        } else {
            expense += amount;
        }
    });

    return (
        <>
            <h3>Your Balance</h3>
            <h1>{income + expense}</h1>
            <div className="inc-exp-container">
                <div>
                    <h3>Income</h3>
                    <div>+${income}</div>
                </div>
                <div className="separator" />
                <div>
                    <h3>Expense</h3>
                    <div>${expense}</div>
                </div>
            </div>
        </>
    );
};

export default IncExpContainer;