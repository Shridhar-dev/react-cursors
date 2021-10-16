import React from 'react'
import './CircleCursor.css'

function CircleCursor(props) {
    
    window.addEventListener('mousemove',(e)=>{
        if((e.clientX < (window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30))) 
            && 
            e.clientY < (document.body.scrollHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40)) ){
            document.getElementById('circle-cursor').style.top = (e.clientY) + 'px' 
            document.getElementById('circle-cursor').style.left = (e.clientX) + 'px'
            document.getElementById('circle-cursor-dot').style.top = (e.clientY) + 'px' 
            document.getElementById('circle-cursor-dot').style.left = (e.clientX) + 'px'
        }
    })

    
    
    return (
        <>
        <div id="circle-cursor"  style={{
            border:`${props.borderWidth ? props.borderWidth : '2px'} 
                    ${props.borderStyle ? props.borderStyle : 'solid'} 
                    ${props.color ? props.color : 'black'}`,
            width:`${props.circleWidth ? props.circleWidth : '3rem'}`,
            height:`${props.circleHeight ? props.circleHeight : '3rem'}`,
            transition: `${props.circleDelay ? props.circleDelay : '0.1s'}`
            }}>
        </div>
        <div id="circle-cursor-dot" style={{
            background:`${props.color ? props.color : 'black'}` ,
            width:`${props.dotWidth ? props.dotWidth : '1rem'}`,
            height:`${props.dotHeight ? props.dotHeight : '1rem'}`,
            transition: `${props.dotDelay ? props.dotDelay : '0.05s'}`
            }}>
        </div>
        </>
    )
}

export default CircleCursor
