import React from 'react';
import './index.css'

const ExpenseForm = () => {
    return(
        <div>
            <form action="">
                <input type="text" placeholder="Enter Amount" required />
                <div>
                    <button type="submit">+ (Money coming)</button>
                    <button type="submit">- (Money going)</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;