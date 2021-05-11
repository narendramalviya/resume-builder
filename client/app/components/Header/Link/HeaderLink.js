import React from 'react'
import { Link } from 'react-router-dom';

const HeaderLink =(props) =>{
    const {to,children} = props;
    return (
        <>
         <Link to={to} {...props}>{children}</Link>   
        </>
    )
}

export default HeaderLink;
