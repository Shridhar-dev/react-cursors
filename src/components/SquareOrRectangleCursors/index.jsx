import React, { useState } from 'react'
import styles from './styles.module.css'

function SquareOrRectangleCursors(props) {
    const [newProps, setNewProps] = useState(props.initial)


    window.addEventListener('mousemove', (e) => {
        if ((e.clientX < (window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30)))
            &&
            e.clientY < (window.outerHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40))) {
            document.getElementById('SquareOrRectangleCursorsMain').style.top = (e.clientY) + 'px'
            document.getElementById('SquareOrRectangleCursorsMain').style.left = (e.clientX) + 'px'
            document.getElementById('SquareOrRectangleCursorsInner').style.top = (e.clientY) + 'px'
            document.getElementById('SquareOrRectangleCursorsInner').style.left = (e.clientX) + 'px'
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
            <div id="SquareOrRectangleCursorsMain" className={styles.SquareOrRectangleCursorsMain} style={{
                border: `${newProps.borderWidth ? newProps.borderWidth : '2px'} 
                    ${newProps.borderStyle ? newProps.borderStyle : 'solid'} 
                    ${newProps.color ? newProps.color : 'black'}`,
                width: `${newProps.shapeSize ? newProps.shapeSize : '3rem'}`,
                height: `${newProps.shapeSize ? newProps.shapeSize : '3rem'}`,
                transition: `${newProps.shapeDelay ? newProps.shapeDelay : '0.08s'}, width 0.2s , height 0.2s`
            }}>
            </div>
            <div id="SquareOrRectangleCursorsInner" className={styles.SquareOrRectangleCursorsInner} style={{
                background: `${newProps.color ? newProps.color : 'black'}`,
                width: `${newProps.innerShapeSize ? newProps.innerShapeSize : '1rem'}`,
                height: `${newProps.innerShapeSize ? newProps.innerShapeSize : '1rem'}`,
                transition: `${newProps.innerShapeDelay ? newProps.innerShapeDelay : '0.03s'}, width 0.2s , height 0.2s`
            }}>
            </div>
        </>
    )
}

export default SquareOrRectangleCursors

