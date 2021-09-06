import React from 'react'
import MainForm from './MainForm'
import './App.css'
import CircleRender from './CircleRender'

export default function app()
{

    return (
    <div className="Container">
        <CircleRender >
            <MainForm/>
        </CircleRender>
    </div>
    )
}