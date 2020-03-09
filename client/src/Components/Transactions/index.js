import React from 'react';
import './index.css'

const Transactions = () => {
    return(
        <div className="transactions-container">
            <table className="transactions-table">
                <thead>
                    <td>Description</td>
                    <td>Amount</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Netflix</td>
                        <td>-799</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;