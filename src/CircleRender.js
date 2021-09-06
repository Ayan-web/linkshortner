import React from "react";
import BigIcon from './Ellipse 3.svg'
import './circleRender.css'

export default function CircleRender(props)
{
    console.log(props)
    return(
    <div className="bigC">

        <BigIcon className="svgElement"/>
        {props.children}
    </div>
    )
}