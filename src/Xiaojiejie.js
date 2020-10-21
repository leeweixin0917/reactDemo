import React,{Component,Fragment} from 'react'
class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['头部按摩','精油推背']
        }
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                        return (
                        <li 
                        onClick={this.deleteList.bind(this,index)}
                        key={index+item}>
                            {item}
                        </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        // console.log(this)
        // this.state.inputValue=e.target.value // 错误书写
        this.setState({
            inputValue: e.target.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
}
export default Xiaojiejie