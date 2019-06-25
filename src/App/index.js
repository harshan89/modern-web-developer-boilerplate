import React, { Component } from "react"
import ReactDOM from "react-dom"
import { TweenMax } from 'gsap'
import UserLogin from '../components/UserLogin'

class App extends Component {
  
  state = {
        
  }

  componentDidMount() {
    // TweenMax.fromTo('h1', 2, {marginTop: -100}, {marginTop:0});
  }

  render() {
    return (
      <div className="app-container">
          <section>
              <UserLogin></UserLogin>
          </section>
      </div>
    );
  }
}
export default App;