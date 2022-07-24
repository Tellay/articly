import React from 'react';

import { Link } from "react-router-dom";

function LinkButton({ path, expectedPath, name }) {
    return ( 
        <li className={`${path === expectedPath ? "relative text-[#E1E1E6] font-bold" : ""}`}>
            <Link to={expectedPath}>{name}</Link>
            <span className={`${path === expectedPath ? "absolute w-[calc(100%+10px)] h-[3px] rounded-t-lg left-[-5px] bottom-[-35px] bg-[#EBA417]" : ""}`}></span>
        </li>
    );
}

export default LinkButton;