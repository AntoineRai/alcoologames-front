import React from 'react'
import './popup.css'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.closePopup()}>X</button>
                    { props.children }
            </div>
        </div>
    ) : "";
}