import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import ApiServices from './services/apiServices';
import './hideScroll.css';
import { bounce, bounceIn, bounceInRight, fadeInLeft, flash, jello, lightSpeedIn, rubberBand, shake, tada, wobble } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const animations = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounceInRight:{
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInRight)
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.serv = new ApiServices();
    this.state = {
      list: [],
      states: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.fetchData();
  }

  fetchData() {
    console.log("bsdk")
    this.serv.getData()
      .then(res => {
        this.setState({ list: res.data, states: res.states });
        console.log("state data", this.state);
        console.log(this.state.states.length);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <StyleRoot>
      <div className="container-fluid" style={{height:'100vh'}}>
        <h3 style={{height:'5vh',marginBottom:0, animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
}}>Covid Affected State of India</h3>
        <div className="scrollable" style={{overflowY:'scroll', height:'95vh', scrollbarWidth:'none', scrollbarColor:'white'}}>
          <ul style={{listStyleType:'none'}}>
          {
            this.state.states.map((ele, i) => {
              if(i===0)return null;
              else
              return (
                <li style={{
                  animation: 'x '+(i+1)/10+'s',
                  animationName: Radium.keyframes(lightSpeedIn),
                }} >
                  <Link to={{
                    pathname: "/"+ele,
                    state: {
                      dataa: this.state.list[ele],
                      stateName:ele
                    }
                    }}
                    style={{textDecoration:'none'}}
                    >
                    <h5 className="hoverEle" style={{color:"black"}}>{ele}</h5>
                  </Link>
                </li>
              )
            })
          }
          {
            <li style={{
              animation: 'x '+(38)/10+'s',
              animationName: Radium.keyframes(lightSpeedIn)
            }} >
            <Link to={{
              pathname: "/"+this.state.states[0],
              state: {
                dataa: this.state.list[this.state.states[0]],
                stateName:this.state.states[0]
              }
            }}>
              <h5 className="hoverEle" style={{color:'black'}}>{this.state.states[0]}</h5>
            </Link>
          </li>
          }
        </ul>
        </div>
      </div>
      </StyleRoot>
    );
  }
}
