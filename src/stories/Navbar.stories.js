import { Navbar } from '../components/organisms/Navbar';
import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Navbar', module);

stories.add('navbar', () => <Navbar/>);