import React, {useState} from 'react';
import './index.css'
import Axios from 'axios';

const ExpenseForm = () => {

    const [amount, setAmount] = useState(0);
    const [remark, setRemark] = useState("");
    const [type, setType] = useState("");

    const postDataRequest = transactionData => {
        Axios.post("http://localhost:5005/", transactionData)
            .then(data => {
                
            })
            .catch(error => {
                console.log("----- DATA SAVE OPERATION FAILED ----- ", error)
            })
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        event.target.reset();
        const transactionData = {
            amount,
            remark,
            type
        }
        postDataRequest(transactionData);
    }

    const handleAmountChange = event => {
        setAmount(event.target.value);
    }

    const handleRemarkChange = event => {
        setRemark(event.target.value);
    }

    const handleMoneyTypeChange = event => {
        setType(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className="form-input-container">
                    <input onChange={handleAmountChange} type="text" placeholder="Enter Amount*" required />
                    <input onChange={handleRemarkChange} type="text" placeholder="Remarks"/>
                </div>
                <div className="form-button-container">
                    <label htmlFor="money-type"></label>
                    <input type="radio" name="money-type" id="money-coming" value="money-coming" onChange={handleMoneyTypeChange} required />Money Coming
                    <input type="radio" name="money-type" id="money-going" value="money-going" onChange={handleMoneyTypeChange} required/>Money Going
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;