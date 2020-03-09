import React from 'react';
import './index.css'
import Filter from '../Filter';
import ExpenseForm from '../ExpenseForm';
import Description from '../Description';
import Summary from '../Summary';


const Main = () => {
    return (
        <div className="main-component">
            <div className="left-section">
                <Filter />
            </div>
            <div className="main-section">
                <ExpenseForm />
                <Description />
            </div>
            <div className="right-section">
                <Summary />
            </div>
        </div>
    )
}

export default Main;