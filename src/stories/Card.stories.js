import { Card } from '../components/molecules/Card';
import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Card', module);

stories.add('card', () => <Card></Card>);