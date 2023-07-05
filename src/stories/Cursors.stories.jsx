import { Cursors } from "./Cursors";
import { CircleCursor, EmojiCursor, ImageCursor, SquareOrRectangleCursors } from "../components";
import { render } from "react-dom";

export default {
    title: 'Cursors',
    component: Cursors,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
    args: {}
};
export const Image = {
    render: () => {
        return (
            <><ImageCursor initial={{ url: 'https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg' }} hover={{}} /></>
        )
    }
}
export const Emoji = {
    render: () => {
        return (
            <><EmojiCursor initial={{}} hover={{}} /></>
        )
    }
}
export const Hexagonimg = {
    render: () => {
        return (
            <><SquareOrRectangleCursors initial={{ circleSize: '1rem', dotSize: '0.5rem', color: 'hotpink' }} hover={{}} /></>
        )
    }
}