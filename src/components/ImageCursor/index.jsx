import React, { useState } from 'react'
import styles from './styles.module.css'

function ImageCursor(props) {

    const [newProps, setNewProps] = useState(props.initial)

    window.addEventListener('mousemove', (e) => {
        if ((e.clientX < (window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30)))
            &&
            e.clientY < (window.outerHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40))) {
            document.getElementById('image__cursor').style.top = (e.clientY) + 'px'
            document.getElementById('image__cursor').style.left = (e.clientX) + 'px'
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
            <div id="image__cursor" className={styles.image__cursor} style={{
                width: `${newProps.width ? newProps.width : '3rem'}`,
                height: `$newPprops.height ? newProps.height : '3rem'}`,
                transition: ` ${newProps.delay ? newProps.delay : '0.1s'}`,
                background: `url(${newProps.url ? newProps.url : ''})`,
                backgroundSize: 'contain'
            }}>

            </div>
        </>
    )
}

export default ImageCursor