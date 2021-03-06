import React from 'react';
import "./SideBarLayOut.css"

export const SideBarLayOut = ({Icon, text}) =>{/*Receive 2 props Icon and text*/
    return(
        <div className = "sidebar-layout">
           <Icon/>
           <h4 className = "sidebar-text">{text}</h4>
        </div>
    )
}