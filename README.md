[![](https://img.shields.io/npm/v/react-cursors)](https://www.npmjs.com/package/react-cursors)
[![](https://img.shields.io/npm/dm/react-cursors)](https://www.npmjs.com/package/react-cursors)
![react' (1) 1](https://user-images.githubusercontent.com/65373279/137585010-15a171b1-9839-4c17-b177-79232d099d2d.png)


<h1 align="left">React Cursors</h1>
<p align="left">Collection of highly customizable cursors for react!</p>

> Currently we have a few cursors ready for you to use, you may also customize them to your liking and contribute to this repo ✨

## Installation
```
npm i react-cursors
```

## Usage

Import the component

``` js
import CircleCursor from 'react-cursors/dist/components/CircleCursor'
```

Use it

``` js
<CircleCursor 
        dotWidth="2rem"
        dotHeight="2rem"
        circleWidth="5rem"
        circleHeight="5rem"
        borderStyle="dotted"
        color="white"
        borderWidth="3px"
        circleDay="0.1s"
        dotDelay="0.05s"
        safeBoundaryX="1000px"
        safeBoundaryY="700px"
/>
```
All the arguments of the cursor are optional


## Instance options

| Option                  | Type      | Default                | Description                                                                                                                                                                                                                                                                                        |
| ----------------------- | --------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `el`                    | `object`  | `document`             | Scroll container element.                                                                                                                                                                                                                                                                          |
| `name`                  | `string`  | `'scroll'`             | Data attribute prefix (`data-scroll-xxxx`).                                                                                                                                                                                                                                                        |   
