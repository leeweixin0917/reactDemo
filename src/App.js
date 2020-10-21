import React,{Component} from 'react'
class App extends Component{
    render(){
        return (
            <ul className="my-list">
                <li>{false?'js':'com'}</li>
                <li>react</li>
            </ul>
        )
        // var child1=React.createElement("li",null,"js.com");
        // var child2=React.createElement("li",null,"react");
        // var root = React.createElement("ul",{className:"my-list"},child1,child2);
    }
}
export default App