import React from 'react';
import { Statements } from '../components/molecules/Statements';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Statements', module);

stories.add('statements', () => <Statements/>);