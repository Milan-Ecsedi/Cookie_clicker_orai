import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {

  cookie: number;
  newGrannyName:string;
  grannies:string[];
}

class App extends Component<{}, State>{

  constructor(props: {}) {

    super(props)
    this.state = {
      cookie: 0,
      newGrannyName:'',
      grannies:[],
    }


  }

  hozzaadas = () => {

    this.setState({ cookie: this.state.cookie+1 });


  }
  buy=()=>{

    if(this.state.cookie>=10){
      let granny=this.state.newGrannyName;
      
      this.setState({
        cookie: this.state.cookie-10,
        grannies:[...this.state.grannies,granny]
      })
    }

  }



  render() {

    let stilus:any={};

    if(this.state.cookie>=50){
      stilus.color='red';
      stilus.fontSize='150%';
      stilus.fontWeight='bold';
    }

  return <div>
      <p style={stilus}>{this.state.cookie.toLocaleString()} Cookies</p> <img src='/cookie-logo.png' onClick={this.hozzaadas} className="grow"></img>
      <p>Nagyi neve:</p><input type='text' value={this.state.newGrannyName} onChange={(e)=>{this.setState({newGrannyName:e.currentTarget.value})}}></input><button onClick={this.buy}> Vásárlás</button>
    <ul>
      {this.state.grannies.map(granny=><li>{granny} <img src='/granny.gif'></img></li>)}
    </ul>
   
   
    </div>

  }

}

export default App;
