import React, { Component } from 'react';

export default class NonProject extends Component {
	render(){
	  	return (
	    	<div className="row text-center"> 	
    			<div className="col-4">
    				<div className="block-adjust"></div>
    				<h2>Projects</h2>
    			</div>
    			<div className="col-4">
    				<div className='height-adjust'></div>
    				<div>
    					<a href="#"><img className="img-responsive" src="../../image/creat-project.png" alt="create a project" height="200" width="200" /></a>
    				</div>
                    <div className='height-adjust-small'></div>
    				<div> 
                        <button className="bt-set" type="button">Let us start! </button>
    				</div>	  
    			</div> 
	    	</div>
	    );
	}
}