import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import './App.jsx';
class index2 extends React.Component{
    constructor(){
        super();
        this.state={
            data:
            [
                {
             "id":"1",   
            "FirstName":"raushan",
            "LastName":"Raj"
            },
            {
                "id":"2",   
               "FirstName":"Manish",
               "LastName":"Kumar"
               }

        
             ]
               }
            }
            a(){
                console.log("click");
            }     
    render(){
        return(
        <table className="table">
            <tbody>
                {this.state.data.map((person,i)=><NameList key={i} data={person}/>)}
        </tbody>
        </table>
        )
    }
}
class NameList extends React.Component{
    b(a){
        alert(a);
    }
    render(){
        return(
            <tr>
              <td>{this.props.data.id}</td>
              <td>{this.props.data.FirstName}</td>
              <td>{this.props.data.LastName}</td>
              <td><button onClick={()=>this.b(this.props.data.id)}>Action</button></td>
            </tr>
        )
    }
}
export default index2;
//ReactDOM.render(<TodoList/>,document.getElementById('root'));