import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
    	<div className="row">
    		<div className="col-4 padding-adjust">
    			<img src="../../image/thunkable_logo.png" className="img-logo img-responsive" height="25" width="125" />
    		</div>
    		<div className="col-4"></div>
		    <div className="col-4 padding-adjust">
		        <list id="canvaslist">
		        	<li className="text-blue"><a href="#">Sample</a></li>
		        	<li></li>
		        	<li className="text-green">
		        		
		        		<span> <a href="#" className="text-green">Join Our Community!</a> </span>
		        	</li>
		        	<li></li>
		        	<li className="text-muted">
		        		<img className="img-responsive" src="../../image/language.png" height="15" width="15" />
		        		<span><a href="#"> Language </a></span>
		        	</li>
		        	<li></li>
		        	<li className="text-muted">
		        		<img className="img-responsive" src="../../image/account.png" height="15" width="15" />
		        		<span><a href="#"> Account</a> </span>
		        	</li>
		        </list>
		    </div>
	    </div>
    );
  }
}