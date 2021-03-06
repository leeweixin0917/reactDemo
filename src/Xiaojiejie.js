import React, { Component, Fragment } from "react";
import axios from "axios";
import "./style.css";
import XiaojiejieItem from "./XiaojiejieItem";
import Boss from "./Boss";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Xiaojiejie extends Component {
  // 在某一时刻，可以自动执行的函数
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  //   componentWillMount() {
  //     console.log("componentWillMount---------组件将要挂载到页面的时刻");
  //   }
  //   componentDidMount() {
  //     console.log("componentWillMount---------组件挂载完成的时刻");
  //   }
  //   shouldComponentUpdate() {
  //     console.log(`shouldComponentUpdate`);
  //     return true;
  //     // return false; // 就不会往下面执行了。
  //   }
  //   componentWillUpdate() {
  //     console.log(`ComponentWillUpdate`);
  //     return true;
  //   }
  //   componentDidUpdate() {
  //     console.log(`componentDidUpdate`);
  //   }

  componentDidMount() {
    axios
      .get("https://www.easy-mock.com/mock/5fa0fc89b2c1752548b97f98/ReactDemo01/xiaojiejie")
      .then((res) => {
        console.log("axio获取数据成功:" + JSON.stringify(res));
        this.setState({
          list:res.data.data
        })
      })
      .catch((error) => {
        console.log(`axios获取数据失败:` + error);
      });
  }
  render() {
    // console.log("render----组件挂载中");
    return (
      <Fragment>
        {/* 第一次注释 (按住Ctrl+/)*/}
        {
          //第一次注释 (单行注释)
        }
        <div>
          <label htmlFor="jspang">增加服务：</label>
          <input
            id="jspang"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={2000}
                  classNames='boss-text'
                  unmountOnExit
                  appear={true}
                  key={index+item}
                >
                    <XiaojiejieItem
                      key={index + item}
                      content={item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)}
                    />
                </CSSTransition>
                
              );
            })}
          </TransitionGroup>
        </ul>
        <Boss/>
      </Fragment>
    );
  }
  //inputChange(e){
  inputChange() {
    // console.log(this)
    // this.state.inputValue=e.target.value // 错误书写
    this.setState({
      inputValue: this.input.value,
    });
  }
  addList() {
    // setState是异步的
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
    console.log(this.ul.querySelectorAll("li").length);
  }
  deleteItem(index) {
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}
export default Xiaojiejie;
