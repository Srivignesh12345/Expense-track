import React, { useState } from 'react';

const NewTransactionForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    const addTransaction = (e) => {
        e.preventDefault();
        console.log("Transaction Added", { title, amount });
        props.addToList(title, amount);

        setTitle('');
        setAmount(0);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <>
            <h4>Add New Transaction</h4>
            <hr />
            <form onSubmit={addTransaction}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={handleTitleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={amount} 
                        onChange={handleAmountChange} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Transaction</button>
            </form>
        </>
    );
};

export default NewTransactionForm;
