import { ProjectLinkCard } from '../components/molecules/ProjectLinkCard';
import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('ProjectLinkCard', module);

stories.add('projectLinkCard', () => <ProjectLinkCard/>);