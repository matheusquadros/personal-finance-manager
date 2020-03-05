import React from 'react';
import DenseAppBar from '../../custom-components/navigation-bar'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="About">
      <DenseAppBar />
      about
      <Link to="/"> go to home</Link>
    </div >
  );
}

export default About;
