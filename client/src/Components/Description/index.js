import React from 'react';
import './index.css'

const Description = () => {
    return(
        <div className="description-container">
            <table className="description-table">
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

export default Description;