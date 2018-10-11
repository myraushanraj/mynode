import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
class Hello extends React.Component{
    render(){
        return(
           
           <h1 className="hello">Helloword</h1> 
          
        )
    }
}
class World extends React.Component{
    constructor(){
        super();
        this.name="manish kumar";
    }
    getname(){
        return "raushan raj";
    }
    render(){
        return(
           
           <h1 className="head">Hello {this.name} and big brother is {this.getname()}{12+12}</h1> 
           
           
        )
    }
}
class index1 extends React.Component{
    render(){
        return(
            <section>
                <Hello/>
                <World/>
            </section>
        )
    }
}
export default index1;
//ReactDOM.render(<HelloWorld/>,document.getElementById('root'));