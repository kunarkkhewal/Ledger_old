import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Home = () => {
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setExpenses(response.data);
            })
            .catch(err => {
                // TODO: make error page and render it.
            });
    }, []);
    return(
        <div>
            <h1>Expenses this month</h1>
            <ul>
                {!!expenses.length && expenses.map((item, index) => {
                    return(
                        <li key={index}>
                            {item.id}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home