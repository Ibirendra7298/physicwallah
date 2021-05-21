import React from 'react';
import './hideScroll.css';
import './App.css';
import {Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import Radium, {StyleRoot} from 'radium';
import { fadeIn, flipInX, headShake, hinge, jello, lightSpeedIn } from 'react-animations';
import { bounce } from 'react-animations';

export default class StatePage extends React.Component {
  constructor(props){
    super(props);
    let districts=[];
    this.active=0;
    this.confirmed=0;
    this.recovered=0;
    this.deceased=0;
    for (const k in this.props.location.state.dataa.districtData) {
      districts.push(k);
      this.active+= this.props.location.state.dataa.districtData[k].active;
      this.recovered+= this.props.location.state.dataa.districtData[k].recovered;
      this.deceased+= this.props.location.state.dataa.districtData[k].deceased;
      this.confirmed+= this.props.location.state.dataa.districtData[k].confirmed;
    }
    this.state={
      list:this.props.location.state.dataa.districtData,
      districts:districts,
      active:0,
      confirmed:0,
      recovered:0,
      deceased:0,
    };
    this.loader= this.loader.bind(this);
    this.loader();
  }

  loader(){
    let str=<img src="https://acegif.com/wp-content/uploads/loading-36.gif" alt="Loading Image" height="100%" width="100%"></img>;
    let num = Math.floor(Math.random()*5);
    switch (num) {
      case 1:
        str=<img src="https://acegif.com/wp-content/uploads/loading-36.gif" alt="Loading Image" height="100%" width="100%"></img>;
        break;
      case 2:
        str=<img src="https://cutewallpaper.org/21/loading-animated-gif-transparent-background/Twilight-on-the-olympic-peninsula.gif" alt="Loading Image" height="100%" width="100%"></img>;
        break;
      case 3:
        str=<img src="https://acegif.com/wp-content/uploads/loading-87.gif" alt="Loading Image" height="100%" width="100%"></img>;
        break;
      case 4:
        str=<img src="https://miro.medium.com/max/1600/1*e_Loq49BI4WmN7o9ItTADg.gif" alt="Loading Image" height="100%" width="100%"></img>;
        break;
    
      default:
        str=<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bea83775357853.5c4a1808c8a7b.gif" alt="Loading Image" height="100%" width="100%"></img>
        break;
    }
    console.log(str);
    return str;
  }

    render(){
      return (
        <StyleRoot>
        <div className="container-fluid" style={{height:'100vh'}}>
          <h3 style={{height:'5vh', marginBottom:0, animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
}}>Covid Affected Districts</h3>
          <div className="row" style={{height:'95vh'}}>
            <div className="col-md-5 scrollable" style={{overflowY:'scroll', height:'100%', scrollbarWidth:'none', scrollbarColor:'white'}}>
              <ul style={{listStyleType:'none'}}>
              {
                this.state.districts.map((ele,i)=>{
                  return(
                  <li style={{animation:'x '+(i+1)/10+'s', animationName:Radium.keyframes(jello)}}>
                  <Link to={{
                    pathname: this.props.location.pathname+"/"+ele,
                    state: {
                      dataa: this.state.list[ele]
                    }}}
                    style={{textDecoration:'none'}}
                    >
                    <h5 className="hoverEle" style={{color:'black'}}>{ele}</h5>
                  </Link>
                  </li>
                  )
                })
              }
              </ul>
            </div>
            <div className=" offset-1 col-md-6" style={{animation:'x 2s', animationName: Radium.keyframes(headShake)}}>
            <Chart
              width={'100%'}
              height={'60%'}
              chartType="Bar"
              loader={this.loader}
              data={[
                ['Status', 'Cases'],
                ['Confirmed', this.confirmed],
                ['Active', this.active],
                ['Recovered', this.recovered],
                ['Deceased', this.deceased],
              ]}
              options={{
                chart: {
                  title: 'State Covid Cases',
                },
              }}
              rootProps={{ 'data-testid': '2' }}
            />
            </div>
          </div>
        </div>
        </StyleRoot>
      );
  }
}
