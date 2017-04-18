import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    	<div className="row">
        <div className="col-1"></div>
		    <div className="col-5">
		        <list id="canvaslist">
		        	<li><a>©Thunkable</a></li>
		        	<li><a href="#">Terms</a></li>
		        	<li><a href="#">Privacy</a></li>
              <li><a href="#">feedback</a></li>
		        </list>
		    </div>
        <div className="col-4"></div>
        <div className="col-2"></div>
	    </div>
    );
  }
}