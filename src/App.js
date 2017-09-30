import React, { Component } from 'react';
import { BackTop } from 'antd';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import PlayBar from './components/PlayBar';
import LoginBox from './components/LoginBox';

class App extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Header />
        <div className="g-bd">{this.props.children}</div>
        <Footer />
        <PlayBar />
        <LoginBox />
        <BackTop />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element,
};

export default App;

