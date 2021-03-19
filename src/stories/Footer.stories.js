import { Footer } from '../components/organisms/Footer';
import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Footer', module);

stories.add('footer', () => <Footer></Footer>);