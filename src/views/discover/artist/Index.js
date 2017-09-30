import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import qs from 'query-string';
import PropTypes from 'prop-types';

import { singerTypes } from '../../../config/pageConfig';

import ExtendRoute from '../../../components/ExtendRoute';


// 歌手
class Artist extends Component {
  constructor(props) {
    super(props);
    this.checkActive = (location, id) => {
      const currid = qs.parse(location.search).id;
      if (currid === id) {
        return true;
      }
      return false;
    };
  }
  render() {
    return (
      <div className="g-bd2 f-cb">
        <div className="g-sd2">
          <div className="g-wrap4 n-sgernav">
            <h2 className="tit">推荐</h2>
            <ul className="nav f-cb">
              <li>
                <Link to="/discover/artist/" exact activeClassName="active">推荐歌手</Link>
              </li>
              <li>
                <Link to="/discover/artist/signed/" activeClassName="active">入驻歌手</Link>
              </li>
            </ul>
            {
              singerTypes.map((i, index) => (
                <div className="blk" key={index}>
                  <h2 className="tit">{i.name}</h2>
                  <ul className="nav f-cb">
                    {
                      i.types.map((type, index1) => (
                        <li key={index1}>
                          <Link isActive={(m, l) => this.checkActive(l, type.id)} activeClassName="active" to={`/discover/artist/cat?id=${type.id}`}>{type.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div className="g-mn2">
          <div className="g-mn2c">
            {
              this.props.routes.map((route, i) =>
                <ExtendRoute key={i} {...route} />,
              )
            }

          </div>
        </div>
      </div>
    );
  }
}
Artist.propTypes = {
  routes: PropTypes.array.isRequired,
};


export default Artist;