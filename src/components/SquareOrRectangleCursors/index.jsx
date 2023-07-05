import React, { useState } from 'react'
import styles from './styles.module.css'

function SquareOrRectangleCursors(props) {
    const [newProps, setNewProps] = useState(props.initial)


    window.addEventListener('mousemove', (e) => {
        if ((e.clientX < (window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30)))
            &&
            e.clientY < (window.outerHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40))) {
            document.getElementById('Hexagon_main').style.top = (e.clientY) + 'px'
            document.getElementById('Hexagon_main').style.left = (e.clientX) + 'px'
            document.getElementById('Hexagon_inner').style.top = (e.clientY) + 'px'
            document.getElementById('Hexagon_inner').style.left = (e.clientX) + 'px'
        }
    })

    let hoverElement = document.querySelectorAll('.hover-detect')
    hoverElement = Array.from(hoverElement)

    hoverElement.forEach((element) => {

        element.addEventListener('mouseenter', () => {
            setNewProps(props.hover)
        })

        element.addEventListener('mouseleave', () => {
            setNewProps(props.initial)
        })

    })

    return (
        <>
            <div id="Hexagon_main" className={styles.Hexagon_main} style={{
                border: `${newProps.borderWidth ? newProps.borderWidth : '2px'} 
                    ${newProps.borderStyle ? newProps.borderStyle : 'solid'} 
                    ${newProps.color ? newProps.color : 'black'}`,
                width: `${newProps.circleSize ? newProps.circleSize : '3rem'}`,
                height: `${newProps.circleSize ? newProps.circleSize : '3rem'}`,
                transition: `${newProps.circleDelay ? newProps.circleDelay : '0.08s'}, width 0.2s , height 0.2s`
            }}>
            </div>
            <div id="Hexagon_inner" className={styles.Hexagon_inner} style={{
                background: `${newProps.color ? newProps.color : 'black'}`,
                width: `${newProps.dotSize ? newProps.dotSize : '1rem'}`,
                height: `${newProps.dotSize ? newProps.dotSize : '1rem'}`,
                transition: `${newProps.dotDelay ? newProps.dotDelay : '0.03s'}, width 0.2s , height 0.2s`
            }}>
            </div>
        </>
    )
}

export default SquareOrRectangleCursors

