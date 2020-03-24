import React from 'react';
import P5Container from './p5component';
import sketchs from './sketchs';

import './scss/main.scss';

export default () => <P5Container sketch={sketchs.mandelbrot} />;
