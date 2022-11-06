import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from './components/Button';

import './style/style.css'

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      couter: 0
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleAdd(){
    this.setState(state => ({ couter: state.couter + 1 }))
  }

  handleSubtract(){
    this.setState(state => ({ couter: state.couter - 1 }))
  }

  handleReset(){
    this.setState(state => ({ couter: 0}))
  }

  render() {
    return(
      <div className="container">
        <Header />

        <main>
          <div className="display">
            <span>
              {
                this.state.couter
              }
            </span>
          </div>

          <div className="buttons-container">
            <Button label='-1' color='red' changeCounter={this.handleSubtract}/>
            <Button label='Zerar' changeCounter={this.handleReset}/>
            <Button label='+1' color='green' changeCounter={this.handleAdd}/>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default App;