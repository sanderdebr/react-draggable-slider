# react-draggable-slider
![GitHub](https://img.shields.io/github/license/dbismut/react-soft-slider)

<p align="left">NPM package for my custom Draggable React Slider using React Spring and GSAP.</p>

## Installation

```
npm install react-draggable-slider --save-dev
```

## Usage

Add `<Slider />` component with sliderSettings object, the only required setting an array of slider items.

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

Use the following structure for your slider items:

```javascript
export const projectList = [
  {
    title: "Cutting Edge Project",
    image: "https://source.unsplash.com/collection/347317/",
    description:
      "Praesent quis congue nisi...",
  },
  {
    title: "Featured Artist 3D",
    image: "https://source.unsplash.com/collection/3573299/",
    description:
      "Duis at tellus vitae velit aliquet varius...",
  }
];
```

> **Note:** although the above example uses hooks, react-draggable-slider is compatible with Class-based components. However, since it internally uses hooks, it requires React `16.8+`.

### Props

The sliderSettings prop in `<Slider sliderSettings={sliderSettings} />` component accepts the following props:

| Name              | Type                                | Description                                                                                                                                                                                                                                | Default Value                     |
| ----------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| `children`        | `node`                              | elements you should pass to the slider and that will be considered as slides                                                                                                                                                               | Required       
| `data`        | `array`       | array of slider items, see below which structure you may use       | `[]`     


### Using
- React Spring
- GSAP
- Styled Components

### Demo
https://sanderdebr.github.io/react-draggable-slider/
