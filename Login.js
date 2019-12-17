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
import HelloRenu from "./HelloRenu";
import styles from './style.css';


export default class Login extends Component
{constructor(props)
    {
      super(props)
      this.state={name:'',email:'',password:'',nameError:'',emailError:'',passwordError:''}
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
  handleChange(e)
  {
    this.setState({[e.target.name]:e.target.value});
    this.setState({nameError:'',emailError:'',passwordError:''})
  }

  handleSubmit(event)
  {
    const result=this.validate();
    if(result)
    {
        // this.setState({nameError:'',emailError:''})
        alert("name submitted");
       this.props.history.push('/HelloRenu');
    }
      event.preventDefault();
  }



  validate()
  {
      let nameError='';
      let emailError='';
      let passwordError='';
      if(!this.state.name)
      {
        nameError="name cannot be empty";
      }
     
      if(!this.state.email.includes("@"))
      {
        emailError="Invalid Email ID";
      }

      if(!this.state.password)
      {
        passwordError="Password can't be empty";
      }
      if(emailError || nameError || passwordError)
      {
          this.setState({emailError,nameError,passwordError})
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

        <b>Name:</b><br /><input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
        <div style={{color:'red'}}> {this.state.nameError} </div>
        <br/>
        <b>Email ID:</b><br /><input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
        <div style={{color:'red'}}> {this.state.emailError} </div>
        <br />
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