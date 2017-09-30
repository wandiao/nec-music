import React, { Component } from 'react';
import { Pagination, message } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { dateBeautify } from '../util/date';
import { pos } from '../util/dom';
import * as api from '../api';

// 评论组件
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.choosePage = (page, pageSize) => {
      const commentPos = pos(document.getElementById('commentWrap'));
      this.props.onChange(page, pageSize, commentPos);
    };
    this.commentAdd = () => {
      if (!this.props.userInfo) {
        message.error('未登录，请先登录');
        return false;
      }
      if (!this.state.content) {
        message.error('请输入评论内容');
        return false;
      }
      api.commentAdd(this.props.id, this.state.content, this.props.type).then(res => {
        if (res.data.code === 200) {
          message.success('评论成功');
          this.props.data.comments.unshift(res.data.comment);
          this.forceUpdate();
        } else {
          message.error(res.data.msg);
        }
      });
    };
  }
  render() {
    const { data, userInfo } = this.props;
    if (!data) {
      return null;
    }
    return (
      <div className="n-cmt" id="commentWrap">
        <div className="u-title u-title-1">
          <h3><span className="f-ff2">评论</span></h3>
          <span className="sub s-fc3">共<span>{data.total}</span>条评论</span>
        </div>
        <div className="m-cmmt">
          <div className="iptarea">
            <div className="head">
              <img src={userInfo ? userInfo.avatarUrl : 'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50'} alt="" />
            </div>
            <div className="m-cmmtipt f-cb f-pr">
              <div className="u-txtwrap holder-parent f-pr">
                <textarea onChange={e => this.setState({ content: e.target.value })} placeholder="评论" className="u-txt area" />
              </div>
              <div className="btns f-cb f-pr">
                <i className="icn u-icn u-icn-36" />
                <i className="icn u-icn u-icn-41" />
                <a onClick={() => this.commentAdd()} href="javascript:;" className="btn u-btn u-btn-1">评论</a>
                <span className="zs s-fc4">140</span>
              </div>
              <div className="corr u-arr">
                <em className="arrline">◆</em>
                <span className="arrclr">◆</span>
              </div>
            </div>
          </div>
          <div className="cmmts">
            <Comment title="精彩评论" {...this.props} comments={data.hotComments} />
            <Comment title="最新评论" {...this.props} total={data.total} comments={data.comments} />
          </div>
          <div className="u-page">
            <Pagination
              onChange={this.choosePage}
              defaultCurrent={1}
              pageSize={20}
              total={data.total}
            />
          </div>
        </div>
      </div>
    );
  }
}
Comments.propTypes = {
  onChange: PropTypes.func,
  userInfo: PropTypes.object,
  id: PropTypes.number,
  type: PropTypes.string,
  data: PropTypes.object,
};

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.toggleLike = (comment) => {
      if (!this.props.userInfo) {
        message.error('未登录，请先登录');
        return false;
      }
      let t = 1;
      if (comment.liked) {
        t = 0;
      }
      api.commentLike(this.props.id, comment.commentId, t, this.props.type).then(res => {
        if (res.data.code === 200) {
          comment.liked = !comment.liked;
          if (t === 1) {
            comment.likedCount++;
          } else {
            comment.likedCount--;
          }
          this.forceUpdate();
        } else {
          message.error(res.data.msg);
        }
      });
    };
    this.commentDelete = (commentId, index) => {
      api.commentDelete(this.props.id, commentId, this.props.type).then(res => {
        if (res.data.code === 200) {
          message.success('删除成功');
          this.props.comments.splice(index, 1);
          this.forceUpdate();
        } else {
          message.error(res.data.msg);
        }
      });
    };
  }
  render() {
    const { title, comments, total } = this.props;
    if (!comments || !comments.length) {
      return null;
    }
    return (
      <div>
        <h3 className="u-hd4">{total ? `${title}(${total})` : title}</h3>
        {
          comments.map((comment, index) => (
            <div className="itm" key={comment.commentId}>
              <div className="head">
                <Link to={`/user/home?id=${comment.user.userId}`}>
                  <img src={comment.user.avatarUrl} alt="" />
                </Link>
              </div>
              <div className="cntwrap">
                <div className="cnt f-brk">
                  <Link to={`/user/home?id=${comment.user.userId}`} className="s-fc7">{comment.user.nickname}</Link>
                  {comment.user.expertTags ? <sup className="u-icn u-icn-84" /> : null} ：{comment.content}
                </div>
                {
                  comment.beReplied && comment.beReplied.length ? (
                    <div className="que f-brk f-pr s-fc3">
                      <span className="darr">
                        <i className="bd">◆</i>
                        <i className="bg">◆</i>
                      </span>
                      {
                        comment.beReplied.map((i, subIndex) => (
                          <span key={subIndex}>
                            <Link className="s-fc7" to={`/user/home?id=${i.user.userId}`}>{i.user.nickname}</Link> ：{i.content}
                          </span>
                        ))
                      }
                    </div>
                  ) : null
                }
                <div className="rp">
                  <div className="time s-fc4">{dateBeautify(comment.time)}</div>
                  {
                    this.props.userInfo && comment.user.userId === this.props.userInfo.userId ? (
                      <span className="dlt">
                        <a onClick={() => this.commentDelete(comment.commentId, index)} href="javascript:void(0)" className="s-fc3">删除</a>
                        <span className="sep">|</span>
                      </span>
                    ) : null
                  }
                  <a href="javascript:;" onClick={() => this.toggleLike(comment)}>
                    <i className={comment.liked ? 'zan u-icn2 u-icn2-13' : 'zan u-icn2 u-icn2-12'} />{comment.likedCount ? `(${comment.likedCount})` : null}
                  </a>
                  <span className="sep">|</span>
                  <a href="javascript:;" className="s-fc3">回复</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}


Comment.propTypes = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.array,
  total: PropTypes.number,
  userInfo: PropTypes.object,
  id: PropTypes.number,
  type: PropTypes.string,
};

export default Comments;