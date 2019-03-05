import React from "react";
import { Link } from "react-router-dom";

export default function()  {
    return (
        <header className='jumbotron'>
            <Link to='/'>
                <h1>Git Hub User Search</h1>
            </Link>
        </header>
    );
};
