import React, { useState } from 'react'
import styles from './styles.module.css'

function EmojiCursor(props) {
    const [newProps, setNewProps] = useState(props.initial)
    
    window.addEventListener('mousemove',(e)=>{
        if((e.clientX < (window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30))) 
            && 
            e.clientY < (window.outerHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40)) ){
            document.getElementById('emoji__cursor').style.top = (e.clientY) + 'px' 
            document.getElementById('emoji__cursor').style.left = (e.clientX) + 'px'
        }
    })
    

    let hoverElement = document.querySelectorAll('.hover-detect')
    hoverElement = Array.from(hoverElement)
  

    hoverElement.forEach((element)=>{
         
        
        element.addEventListener('mouseenter',()=>{
            setNewProps(props.hover)
        })
        
        element.addEventListener('mouseleave',()=>{
            setNewProps(props.initial)
        })
        
    }) 
    
    return (
        <>
            <div id="emoji__cursor" className={styles.emoji__cursor} style={{
                fontSize:`${newProps.size ? newProps.size : '3rem'}`,
                transition: `${newProps.delay ? newProps.delay : '0.1s'}`
                }}>
                {newProps.emoji ? newProps.emoji : '🤚'}
            </div>
        </>
    )
}

export default EmojiCursor
