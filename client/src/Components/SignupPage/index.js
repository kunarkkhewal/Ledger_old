import React from "react";

const SignupPage = () => {
    return(
        <div>
            <form>
                <input type="text" name="username" className="username" placeholder="Enter Username"/>
                <input type="password" name="password" className="password" placeholder="Enter Password"/>
            </form>
        </div>
    )
}

export default SignupPage;