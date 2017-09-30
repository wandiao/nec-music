import React, { Component } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class RdiType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
    };
    this.chooseIndex = (index) => {
      if (index < 0 || index > this.props.cates.length - 1) {
        return false;
      }
      this.setState({
        currIndex: index,
      });
    };
  }
  componentWillReceiveProps(np) {
    const { cates, currId } = np;
    cates.forEach((i, index) => {
      if (i.map(item => item.id).indexOf(Number(currId)) !== -1) {
        this.chooseIndex(index);
      }
    });
  }
  render() {
    const { currIndex } = this.state;
    const { cates, currId } = this.props;
    if (!cates.length) {
      return <div style={{ height: '194px' }} className="loading"><Spin tip="Loading..." /></div>;
    }
    return (
      <div className="rditype f-pr f-cb">
        <div className="boxes j-flag muti">
          {
            cates.map((group, index) => (
              <ul key={index} className={index === currIndex ? 'box f-cb show' : 'box f-cb'}>
                {
                  group.map((cate, index1) => (
                    <li key={index1}>
                      <Link className={currId === cate.id ? 'z-sel' : null} to={`/discover/djradio/category?id=${cate.id}`}>
                        <div className="icon" style={{ backgroundImage: `url(${cate.picWebUrl})` }} />
                        <em>{cate.name}</em>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            ))
          }
        </div>
        <span onClick={() => this.chooseIndex(currIndex - 1)} className={currIndex <= 0 ? 'turn turn-left z-dis' : 'turn turn-left'}>向左</span>
        <span onClick={() => this.chooseIndex(currIndex + 1)} className={currIndex >= cates.length - 1 ? 'turn turn-right z-dis' : 'turn turn-right'}>向右</span>
        <div className="dotpage">
          {cates.map((i, index) =>
            <span onClick={() => this.chooseIndex(index)} key={index} className={currIndex === index ? 'dot curr' : 'dot'}>{index + 1}</span>,
          )}
        </div>
      </div>
    );
  }
}
RdiType.propTypes = {
  cates: PropTypes.array,
  currId: PropTypes.number,
};

export default RdiType;