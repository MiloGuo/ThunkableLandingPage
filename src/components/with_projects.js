import React, { Component } from 'react';


//var projects = [];
var projects = ["BetterMe","SayYouSayMe","Vacation","SayYou","VacationWise","SayMe","Wise"];
var peopleLIS = projects.map(function(project){
    return (<li className="list-group-item" key={project}>
             <p> 
                {project} 
                <span className="li-button">
                    <a href="#" className=" text-right btn btn-primary right-adjust" >Open</a>
                    <button type="button" className="text-right btn btn-danger" ><span className="glyphicon glyphicon-trash" aria-hidden="true">Delete</span></button>
                </span>
            </p>
            </li>);
});

export default class WithProject extends Component {
	render(){
	  	return (
	    	<div className="row">
	    		<div className="col-1"></div>	
    			<div className="col-7">
    				<div className="block-adjust"></div>
    				<h2>Projects</h2>
    				<ul className="list-group"> {peopleLIS} </ul>

    			</div> 
    			<div className="col-4 text-center">
    				<div className="block-adjust"></div>
    				<button type="button">+ New Project</button>
    			</div>
			
	    	</div>
	    );
	}
}