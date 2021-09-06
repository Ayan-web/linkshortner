import React from 'react'
import './MainForm.css'
import Shortner from './shortner.svg'

export default function MainForm()
{

    return (
    <>
            <main className="mainContainer">
                <form className="inputForm">
                    <input className="textField" type="text"/>
                    <Shortner 
                        onClick={()=>{console.log('yo')}}
                        className="Svgbutton"
                    />
                </form>
            </main>
    </>
    )
}