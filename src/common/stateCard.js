import React from 'react';
import { Link } from "react-router-dom";

export default class StateCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:props.data,
            districts:[]
        };
        console.log("props",this.state);
    }

    render(){
        return(
            <div className="card text-center col-10 offset-1" 
              style={{padding:'08px',marginBottom:'8px'}} >
                <Link to={{
                    pathname: "/user/:"+ this.state.data.statecode,
                    state: {
                        user: this.state.item
                    }
                    }}>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </Link>
            </div>
        )
    }
}