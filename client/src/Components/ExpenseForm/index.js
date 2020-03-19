import React, {useState} from 'react';
import './index.css'
import Axios from 'axios';

const ExpenseForm = () => {

    const [amount, setAmount] = useState(0);
    const [remark, setRemark] = useState("");
    const [type, setType] = useState("");

    const postDataRequest = ()=> {
        Axios.post("http://localhost:5005/", {amount, remark, type})
    }

    const handleOnSubmit = event => {
        event.preventDefault();

        setAmount(event.target[0].value);
        setRemark(event.target[1].value);

        event.target.reset();
        postDataRequest();
    }

    const handleMoneyTypeChange = event => {
        setType(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className="form-input-container">
                    <input type="text" placeholder="Enter Amount*" required />
                    <input type="text" placeholder="Remarks"/>
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