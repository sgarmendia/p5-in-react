
# p5-in-react

A simple boilerplate to initiate a P5.js project with React

In order to use/experiment please clone this repo and do:

```
npm i
npm start
```
## Usage

The wrapper component containing the P5 canvas is:

```
<P5Container sketch={sketch} />
```

The basic template of a Sketch would be:

```
export default p => {
    let = myVariable
    p.setup = () => {
        p.createCanvas(710, 400);
        p.noLoop();
    };

    p.redrawFromProps = props => {
        if (props.myProp !== null){
            myVariable = props.myProp
        }
    };

  p.draw = () => {
    //use myVariable as you may see fit
    p.background(0);
    circle(350, 200, 100);
  };
};
```

The Sketch must be passed as a prop (called **sketch**) to the **P5Container**. The Sketch uses *instance mode* with **p** being an instance of the *p5()* constructor. This intance contains almost all methods required by the user.

The **redrawFromProps** function is called as a callback that receives the user custom props through the wrapper component. These props may be used to control the variables in the sketch and manipulate events.

The boilerplate loads with the following example sketch the renders the Mandelbrot set:

![mandelbrot set](./assets/mandelbrot.png)

###### Example sketch based on Daniel Shiffman's [Mandelbrot Example](https://processing.org/examples/mandelbrot.html) for Processing.

###### [p5.js](https://p5js.org/) was created by [Lauren McCarthy](https://lauren-mccarthy.com/p5-js) and is developed by a community of collaborators, with support from the [Processing Foundation](https://processingfoundation.org/) and [NYU ITP](https://tisch.nyu.edu/itp). Identity and graphic design by [Jerel Johnson](http://jereljohnson.com/). © [Info](https://p5js.org/copyright.html).

