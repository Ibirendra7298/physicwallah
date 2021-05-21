import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";
import Radium from 'radium';
import { fadeInRight, headShake } from 'react-animations';
import { bounce } from 'react-animations';

export default class DistrictPage extends React.Component {
  constructor(props){
    super(props);
    console.log("match",this.props);
    this.state={
        data:this.props.location.state.dataa,
    };
  }

    render(){
      return (
          
        <div className="container-fluid" style={{height:'100vh'}}>
          <h3 style={{height:'5vh', marginBottom:0, animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
}}>Covid Data District</h3>
          {
              (this.props.location.state.dataa.notes==="")
              ?null
              : <h5 style={{animation:'x 2s', animationName: Radium.keyframes(fadeInRight)}}><span style={{color:"red"}}>Note:</span> {this.props.location.state.dataa.notes}</h5>
          }
          <br></br>
            <div className="row" style={{animation:'x 2s', animationName: Radium.keyframes(fadeInRight)}}>
                <div className="col-4">Confirmed: </div>
                <div className="offset-4 col-4">{this.state.data.confirmed?this.state.data.confirmed:0 + (this.state.data.delta.confirmed?this.state.data.delta.confirmed:0)}</div>
            </div>
            <div className="row" style={{animation:'x 2s', animationName: Radium.keyframes(fadeInRight)}}>
                <div className="col-4">Active: </div>
                <div className="offset-4 col-4">{this.state.data.active?this.state.data.active:0 + (this.state.data.delta.active?this.state.data.delta.active:0)}</div>
            </div>
            <div className="row" style={{animation:'x 2s', animationName: Radium.keyframes(fadeInRight)}}>
                <div className="col-4">Recovered: </div>
                <div className="offset-4 col-4">{this.state.data.recovered?this.state.data.recovered:0 + (this.state.data.delta.recovered?this.state.data.delta.recovered:0)}</div>
            </div>
            <div className="row" style={{animation:'x 2s', animationName: Radium.keyframes(fadeInRight)}}>
                <div className="col-4">Deceased: </div>
                <div className="offset-4 col-4">{this.state.data.deceased?this.state.data.deceased:0 + (this.state.data.delta.deceased?this.state.data.delta.deceased:0)}</div>
            </div>
                <Chart
                style={{animation:'x 2s',animationName: Radium.keyframes(headShake)}}
                width={'70vw'}
                height={'65vw'}
                chartType="BarChart"
                loader={<img src="https://cdn.dribbble.com/users/32512/screenshots/5276094/smile_loader_by_gleb.gif" alt="Loading Image" height="100%" width="100%"></img>}
                data={[
                    ['Status', 'Cases','New Cases'],
                    ['Confirmed', this.state.data.confirmed, this.state.data.delta.confirmed],
                    ['Active', this.state.data.active, this.state.data.delta.active],
                    ['Recovered', this.state.data.recovered, this.state.data.delta.recovered],
                    ['Deseased', this.state.data.deceased, this.state.data.delta.deceased],
                ]}
                options={{
                    title: 'Cases in ' + this.props.match.params.districtName,
                    chartArea: { width: '50%' },
                    isStacked: true,
                    hAxis: {
                    title: 'Covid Cases',
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'Status',
                    },
                }}
                />
        </div>
      );
  }
}
