import React, { Component } from 'react';
import NonProject from './non_project';
import WithProject from './with_projects';



var projects = [];
//var projects = ["BetterMe","SayYouSayMe","VacationWise","SayYouSayMe","VacationWise","SayYouSayMe","VacationWise","SayYouSayMe","VacationWise","SayYouSayMe","VacationWise"];

export default class ProjectStarter extends Component {
  render() {
  	if(projects.length===0){
  		return (<NonProject></NonProject>);
 	}else{
		return (<WithProject></WithProject>);
	}
  }
}