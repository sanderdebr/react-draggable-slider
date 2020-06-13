# react-draggable-slider
![GitHub](https://img.shields.io/github/license/dbismut/react-soft-slider)

<p align="middle">NPM package for my custom Draggable React Slider using React Spring and GSAP.</p>

## Installation

```
npm install react-draggable-slider --save-dev
```

## Usage

Add `<Slider />` component with settings object, only required property is your project list.

Use the following structure for your project items:

```javascript
export const projectList = [
  {
    title: "Cutting Edge Project",
    image: "https://source.unsplash.com/collection/347317/",
    description:
      "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. ",
  }
];
```

```jsx
import { Slider } from 'react-soft-slider'

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

function App() {
  const [index, setIndex] = React.useState(0)

  return (
    <Slider
      index={index}
      onIndexChange={setIndex}
      style={{ width: 400, height: 200 }}
    >
      {slides.map((color, i) => (
        <div key={i} style={{ ...style, background: color }} />
      ))}
    </Slider>
  )
}
```

As you can see from the example, any child of the `<Slider />` component is considered as a slide. You are fully responsible for the appearance of the slides, and each slide can be styled independently.

> **Note:** although the above example uses hooks, react-soft-slider is compatible with Class-based components. However, since it internally uses hooks, it requires React `16.8+`.

### Props

The `<Slider />` component accepts the following props:

| Name              | Type                                | Description                                                                                                                                                                                                                                | Default Value                     |
| ----------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| `children`        | `node`                              | elements you should pass to the slider and that will be considered as slides                                                                                                                                                               | Required                          |
| `index`           | `number`                            | the index of the slide that should be shown by the slider                                                                                                                                                                                  | Required                          |
| `onIndexChange()` | `(newIndex: number) => void`        | function called by the slider when the slide index should change                                                                                                                                                                           | Required                          |
| `indexRange`      | `[number,number]`                   | sets the minimum and maximum index range the slider should slide through. If the maximum index is negative, then it's set relatively to the children length. [See example here](https://codesandbox.io/s/react-soft-slider-example-o7k0g). |                                   |
| `enabled`         | `boolean`                           | enables or disables the slider gestures                                                                                                                                                                                                    | `true`                            |
| `vertical`        | `boolean`                           | enables vertical sliding mode                                                                                                                                                                                                              | `false`                           |
| `draggedScale`    | `Number`                            | scale factor of the slides when dragged                                                                                                                                                                                                    | `1.0`                             |
| `draggedSpring`   | `object`                            | spring between the pointer and the dragged slide                                                                                                                                                                                           | `{ tension: 1200, friction: 40 }` |
| `trailingSpring`  | `object`                            | spring of the other slides                                                                                                                                                                                                                 | `{ tension: 120, friction: 30 }`  |
| `releaseSpring`   | `object`                            | spring used when the slides rest (user releases the pointer)                                                                                                                                                                               | `{ tension: 120, friction: 30 }`  |
| `trailingDelay`   | `Number`                            | delay of trailing slides (in ms)                                                                                                                                                                                                           | `50`                              |
| `onDragStart()`   | `(pressedIndex: number) => void`    | function called when the drag starts, passing the index of the slide being dragged as an argument                                                                                                                                          |                                   |
| `onDragEnd()`     | `(pressedIndex: number) => void`    | function called when the drag ends, passing the index of the slide being dragged as an argument                                                                                                                                            |                                   |
| `className`       | `string`                            | CSS class passed to the slider wrapper                                                                                                                                                                                                     |                                   |
| `style`           | `object`                            | style passed to the slider wrapper                                                                                                                                                                                                         |                                   |
| `slideStyle`      | `object` or `(i: number) => object` | style passed to the slides                                                                                                                                                                                                                 |                                   |
| `slideClassName`  | `string`                            | CSS class passed to the slides                                                                                                                                                                                                             |                                   |
| `slideAlign`      | `string (align-items prop)`         | slide alignment (`'center'`, `'flex-start'`, `'flex-end'`)                                                                                                                                                                                 | `'center'`                        |

### Using
- React Spring
- GSAP
- Styled Components

### Demo
https://sanderdebr.github.io/react-draggable-slider/
