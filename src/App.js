import React, { Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayBar from './components/PlayBar'
import LoginBox from './components/LoginBox'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <Footer/>
        <PlayBar/>
        <LoginBox />
      </div>
    )
  }
}

export default App;

