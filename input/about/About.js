import { DOM } from 'react';
import styles from './about.css';

const About = () => (
  DOM.h1(
    {
      className: styles.header,
    },
    '👋 world'
  )
);

export default About;
