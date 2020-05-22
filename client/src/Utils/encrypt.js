import React from 'react';
import jwt from 'jsonwebtoken';

const Encrypt = props => {
    let token = jwt.sign(props, 'secret');
    return token;
}

export default Encrypt;