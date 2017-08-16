import React, { Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayBar from './components/PlayBar'
import LoginBox from './components/LoginBox'
import { BackTop } from 'antd';

class App extends Component {
  
  render() {
    // window.localStorage.clear();
    window.scrollTo(0,0);
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <Footer/>
        <PlayBar/>
        <LoginBox />
        <BackTop />
      </div>
    )
  }
}

export default App;

