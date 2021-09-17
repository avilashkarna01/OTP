
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./App.css";

import React, { Component } from "react";
import OtpInput from "react-otp-input";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'400px',
    overflow:'hidden',
   
  },
};
export default class Otp extends Component {
  state = { otp: "" };

  handleChange = otp => this.setState({ otp });

  render() {
    return (
     
      <OtpInput
        
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
        Type="number"
        
      />
      
    );
  }
}
