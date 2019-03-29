import React from 'react';
import { storiesOf } from '@storybook/react';
import { Circle, Facebook, Ring, Ripple } from '../src';

storiesOf('Spinners', module)
  .add('Circle', () => (
    <Circle />
  ))
  .add('Facebook', () => (
    <Facebook />
  ))
  .add('Ring', () => (
    <Ring />
  ))
  .add('Ripple', () => (
    <Ripple />
  ));
