import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return (
      <div className="g-bd g-min">
        <div className="g-wrap">
          <div className="n-for404">
            <i className="u-errlg u-errlg-404" />
            <p className="note s-fc3">很抱歉，你要查找的网页找不到</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoMatch;