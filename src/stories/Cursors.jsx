import { useEffect, useState } from "react";
import { CircleCursor, EmojiCursor, ImageCursor, SquareOrRectangleCursors } from "../components"
import './cursors.css';

export const Cursors = (args) => {
    const [isloaded, setIsloaded] = useState(false)

    useEffect(() => {
        setIsloaded(true)
    }, [])
    console.log(args)
    return (
        <>
            <header className="App-header">
                <p
                    className="hover-detect"
                > Hover me </p>
            </header>
            <header className="App-header">
                <p
                    className="hover-detect"
                > Hover me </p>
            </header>
            {!isloaded ? <div>Loading...</div>  : <CircleCursor initial={{ circleSize: '1rem', dotSize: '0.5rem', color: 'pink' }} hover={{ circleSize: '1.3rem' }} />}
        </>
    )
}
