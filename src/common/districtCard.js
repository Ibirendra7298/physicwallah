import React from 'react';

export default class DistrictCard extends React.Component {

	constructor(props){
		super(props);
		this.state={
			keyword:''
		};
		this.msg=this.msg.bind(this);
		this.submit=this.submit.bind(this);
		console.log(props);
	}
	
	submit(){
		this.props.search(this.state.keyword);
		// this.setState({keyword:''});
	}

	msg(event){
		this.setState({keyword:event.target.value});
		console.log(event);
		event.preventDefault();
		console.log(this.state.keyword);
		this.submit();
	}
	


  render(){
    return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width:'100%'}}>
				<a className="navbar-brand" href="#" style={{margin:'auto'}}>Styldod</a>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" placeholder="Search"
					 value={this.state.keyword}
					 onChange={(e)=>this.msg(e)} ></input>
				</form>
			</nav>
    )
  }  
}