import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import React, {Component} from "react"

class App extends Component {
  render(){
    return(
      <div>
        <ScrollBox ref={(ref)=>this.scrollBox=ref} />
        <button onClick={()=>this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    )
  }
}

export default App;
