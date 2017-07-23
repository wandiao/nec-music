import React, { Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayBar from './components/PlayBar'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div>{this.props.children}</div>
        <Footer/>
        <PlayBar/>
      </div>
    )
  }
}

export default App;

