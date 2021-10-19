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
import { CircleCursor } from 'react-cursors'
```

Use it

``` js
<CircleCursor 
        safeBoundaryX="1000"
        safeBoundaryY="700"
        initial={{
                dotSize:"2rem",
                circleSize:"5rem",
                borderStyle:"dotted",
                color:"white",
                borderWidth:"3px",
                circleDay:"0.1s",
                dotDelay:"0.05s"
        }}

        hover={{
                dotSize:"0rem",
                circleSize:"10rem",
                borderStyle:"dotted",
                color:"white",
                borderWidth:"3px",
                circleDay:"0.1s",
                dotDelay:"0.05s"
        }}
/>

```

Props provided in the initial will be the initial styles of the cursor, and the props provided in the hover will be the styles of cursor when the cursor hovers over an element with class 'hover-detect'. 

<br/>

If you want to use default styling, or no hover elements then you will have to keep the component as :

```js

<CircleCursor initial={{}} hover={{}} />

```
<br/>

Further, it is always recommeded to use lazy loading while importing the component, to avoid any DOM related problems.

Problems faced without lazy loading can lead to bugs like, hover styles not getting activated when cursors hovers over elements having class 'hover-detect'

```

import React, { Suspense } from "react"; // we also need to import suspense

const CircleCursor = React.lazy(() => import('react-cursors').then(module => ({ default: module.CircleCursor }))) ;

```

And using it like : 

```html

     <div> 
          <Components />
          <Suspense fallback={<div>Loading ... </div>}>
            <CircleCursor initial={{circleSize:'30px',dotSize:'6px',color:'white'}} hover={{circleSize:'50px',dotSize:'0px',color:'white'}}/>
          </Suspense> 
      </div>

```




## Element attributes 
All the attributes are optional, incase values are not provided, the default values will be used

<br/><br/>

### Common for all
<br/>

| Attribute               | Values                   | Description                                                                              |
| ----------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| `safeBoundaryX`      | `string`                 | Used to set the boundary of the cursor along the x-axis, helpful inorder to prevent overflow 
| `safeBoundaryY`      | `string`                 | Used to set the boundary of the cursor along the y-axis, helpful inorder to prevent overflow 

<br /><br />

### Circle Cursor
<br/>

| Attribute               | Values                   | Description                                                                              |
| ----------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| `dotSize`        | `string`                 | Used to set the size of the inner dot                                           |
| `circleSize`   |    `string`             | Used to set the size of the outer circle |
| `borderStyle`    | `string`                | Used to set the border style of the outer circle                                                        |
| `color`      | `string`                 | Used to set the color of the outer circle and inner dot                                                      |
| `borderWidth`      | `string`                 | Used to set the border width of the outer circle                                                     |
| `circleDelay`      | `string`                 | Used to set the delay of the outer circle                                                      |
| `dotDelay`      | `string`                 | Used to set the delay of the inner circle                                                      |

<br /><br />

### Emoji Cursor
<br/>

| Attribute               | Values                   | Description                                                                              |
| ----------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| `size`              |        `string`          | Used to set the size of the emoji                                                                       |
| `delay`        | `string`                 | Used to set the delay of the emoji |
| `emoji`   |    `string`             | Used to set the emoji  |

<br /><br />

### Image Cursor

#### Experimental ⚠
<br/>

| Attribute               | Values                   | Description                                                                              |
| ----------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| `width`              |        `string`          | Used to set the width of the image                                                          |
| `height`              |        `string`          | Used to set the height of the image                                                          |
| `delay`        | `string`                 | Used to set the delay of the image |
| `url`   |    `string`             | Url of the image  |


 

---

<h3 align="center"> <b>Join our Community and feel free to drop your questions on</h3>
<p align="center">
   <a href="https://discord.gg/druweDMn3s"></a>
   <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"> 
</p>

---
        
## Project Maintainers 🛠

<table>
  <tbody>
       <tr>
          <td align="center"><a href="https://github.com/DevrajDC"><img alt="" src="https://avatars.githubusercontent.com/u/65373279" width="130px;"><br><sub><b> Devraj Chatribin </b></sub></a><br>💻</td> </a></td>
        <td align="center"><a href="https://github.com/Shridhar-dev"><img alt="" src="https://avatars.githubusercontent.com/u/52820662" width="130px;"><br><sub><b> Shridhar Kamat </b></sub></a><br>💻</td> </a></td>
        </tr>
</tbody></table>