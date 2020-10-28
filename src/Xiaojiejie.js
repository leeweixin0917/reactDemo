import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem';
class Xiaojiejie extends Component{
    // 在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['头部按摩','精油推背']
        }
    }
    componentWillMount() {
        console.log('componentWillMount---------组件将要挂载到页面的时刻')
    }
    componentDidMount() {
        console.log('componentWillMount---------组件挂载完成的时刻')
    }
    render(){
        console.log('render----组件挂载中')
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
                        ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                        return (
                            <XiaojiejieItem 
                            key={index+item} 
                            content={item} 
                            index={index} 
                            deleteItem={this.deleteItem.bind(this)}/>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    //inputChange(e){
        inputChange(){
        // console.log(this)
        // this.state.inputValue=e.target.value // 错误书写
        this.setState({
            inputValue: this.input.value
        })
    }
    addList(){
        // setState是异步的
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll("li").length)
        })
        console.log(this.ul.querySelectorAll("li").length)
    }
    deleteList(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie