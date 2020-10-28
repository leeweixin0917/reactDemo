import React, { Component } from "react";
import propTypes from "prop-types";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // 组件第一次存在于dom中，函数不会被执行
  // 如果已经存在于dom中，函数才会被执行
  //   componentWillReceiveProps() {
  //     console.log(`child---componentWillReceiveProps`);
  //   }
  //   componentWillUnmount() {
  //     console.log(`child---componentWillUnmount`);
  //   }
  // 避免多次渲染render
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log(`child-render`);
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}为你服务--{this.props.content}
      </li>
    );
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

XiaojiejieItem.propTypes = {
  avname: propTypes.string.isRequired,
  content: propTypes.string,
  index: propTypes.number,
  deleteItem: propTypes.func,
};
XiaojiejieItem.defaultProps = {
  avname: "哈哈",
};
export default XiaojiejieItem;
