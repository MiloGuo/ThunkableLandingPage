import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import ProjectStarter from './components/project_starter';


ReactDOM.render(
  <Header />
  , document.querySelector('.thunkableHeader'));
ReactDOM.render(
  <ProjectStarter />
  , document.querySelector('.projectStarter'));
ReactDOM.render(
  <Footer />
  , document.querySelector('.thunkableFooter'));

