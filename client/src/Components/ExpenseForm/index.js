import React from 'react';
import './index.css'

const ExpenseForm = () => {
    return(
        <div>
            <form action="">
                <div className="form-input-container">
                    <input type="text" placeholder="Enter Amount*" required />
                    <input type="text" placeholder="Remarks"/>
                </div>
                <div className="form-button-container">
                    <button className="form-button" id="money-coming-button" type="submit">Money Coming</button>
                    <button className="form-button" id="money-going-button" type="submit">Money Going</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;