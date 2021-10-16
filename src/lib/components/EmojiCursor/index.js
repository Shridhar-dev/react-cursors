import React from 'react'
import './EmojiCursor.css'

function EmojiCursor(props) {
    
    window.addEventListener('mousemove',(e)=>{
        if((e.clientX < (window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30))) 
            && 
            e.clientY < (document.body.scrollHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40)) ){
            document.getElementById('emoji-cursor').style.top = (e.clientY) + 'px' 
            document.getElementById('emoji-cursor').style.left = (e.clientX) + 'px'
        }
    })
    
      
    
    return (
        <>
            <div id="emoji-cursor" style={{
                fontSize:`${props.size ? props.size : '3rem'}`,
                transition: `${props.delay ? props.delay : '0.1s'}`
                }}>
                {props.emoji ? props.emoji : '🤚'}
            </div>
        </>
    )
}

export default EmojiCursor
