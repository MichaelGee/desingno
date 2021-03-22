import { ProjectCard } from '../components/molecules/ProjectCard';
import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('ProjectCard', module);

stories.add('projectCard', () => <ProjectCard/>);