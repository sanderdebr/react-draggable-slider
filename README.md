# react-draggable-slider

![GitHub](https://img.shields.io/github/license/dbismut/react-soft-slider)

[![Edit agitated-christian-rlg5j](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/agitated-christian-rlg5j?fontsize=14&hidenavigation=1&theme=dark)

<p align="left">NPM package for my custom Draggable React Slider using React Spring and GSAP.</p>

## Installation

```
npm install react-draggable-slider --save-dev
```

### Demo

https://sanderdebr.github.io/react-draggable-slider/

<iframe
     src="https://codesandbox.io/embed/agitated-christian-rlg5j?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="agitated-christian-rlg5j"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Usage

Add `<Slider />` component with sliderSettings object, the only required setting an array of slider items.

```jsx
import { Slider } from "react-draggable-slider";
import { projectList } from "./data";

function App() {
  const sliderSettings = {
    data: projectList,
    speed: 3000,
    easing: "elastic",
    bgColor: "rgba(255, 255, 255, 0.05)",
    buttonHref: "https://www.google.com",
    buttonTarget: "_self",
    buttonText: "View project",
    showButton: true,
  };
  return <Slider sliderSettings={sliderSettings} />;
}
```

Use the following structure for your slider items:

```javascript
export const projectList = [
  {
    title: "Cutting Edge Project",
    image: "https://source.unsplash.com/collection/347317/",
    description: "Praesent quis congue nisi...",
  },
  {
    title: "Featured Artist 3D",
    image: "https://source.unsplash.com/collection/3573299/",
    description: "Duis at tellus vitae velit aliquet varius...",
  },
];
```

> **Note:** although the above example uses hooks, react-draggable-slider is compatible with Class-based components. However, since it internally uses hooks, it requires React `16.8+`.

### Props

The sliderSettings prop in `<Slider sliderSettings={sliderSettings} />` component accepts the following props:

| Name         | Type      | Description                                                                          | Default Value               |
| ------------ | --------- | ------------------------------------------------------------------------------------ | --------------------------- |
| `data`       | `array`   | array of slider items, see below which structure you may use                         | `[]`                        |
| `speed`      | `number`  | speed of sliding to next item when dragged in milliseconds                           | 3000 (3 seconds)            |
| `easing`     | `string`  | 4 available GSAP easings to animate the sliding: "power", "back", "elastic", "expo". | ease                        |
| `bgColor`    | `string`  | Set background-color of the whole slider, accepts HEX and RGB(A).                    | `rgba(255, 255, 255, 0.05)` |
| `buttonText` | `string`  | Text inside button per item                                                          | `View case study`           |
| `showButton` | `boolean` | If a button should be shown for all items                                            | `true`                      |

### Using

- React Spring
- GSAP
- Styled Components
