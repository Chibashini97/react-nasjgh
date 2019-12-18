import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {
	withRouter
} from 'react-router-dom';
import Display from "./Display";
import Logout from "./Logout";
import styles from './style.css';


export default class Login extends Component
{constructor(props)
    {
      super(props)
      this.state={name:'',password:'',nameError:'',passwordError:''}
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
  handleChange(e)
  {
    this.setState({[e.target.name]:e.target.value});
    this.setState({nameError:'',passwordError:''})
  }

  handleSubmit(event)
  {
    const result=this.validate();
    if(result)
    {
        alert("name submitted");
       this.props.history.push('/Logout');
    }
      event.preventDefault();
  }



  validate()
  {
      let nameError='';
      let passwordError='';
      if(!this.state.name)
      {
        nameError="name cannot be empty";
      }
     
      // if(!this.state.email.includes("@"))
      // {
      //   emailError="Invalid Email ID";
      // }

      if(!this.state.password)
      {
        passwordError="Password can't be empty";
      }
      if(nameError || passwordError)
      {
          this.setState({nameError,passwordError})
          return false;
      }
      return true;
  }


  render()
  {
    return(
      <div>
      
      <form onSubmit={this.handleSubmit}>
      
      <div className="Decor">
          <div className="Log">LOGIN</div>

        <b>UserName:</b><br /><input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
        <div style={{color:'red'}}> {this.state.nameError} </div>
        <br/>
        <b>Password:</b><br /><input type="password" name="password"  onChange={this.handleChange} value={this.state.password}/>
        <div style={{color:'red'}}> {this.state.passwordError} </div>
        <br />
        <input type="submit" name="submit"/>
      </div>
      </form>
      </div>
      
    )

  }
}