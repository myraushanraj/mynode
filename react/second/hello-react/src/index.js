import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import { BrowserRouter as Router ,Link, Switch,Route} from 'react-router-dom';
import index1 from './index1.js'; 
import index2 from './index2.js';

class Ajax extends React.Component{
    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            success:(data)=>{
            this.setState(
                {
                    users:data
                }
            )    
                
            }
        })
    }
    render(){
        const { users }= this.state;
        return(
           
            <Router>
           <ul>
              {
               users.map(user=>{
                    return(
                        <li key={user.id}>{user.name}</li>
                    )
                })
              } 
              
              
              <li><Link to={'/index1'}>index1</Link></li>
              <li><Link to={'/index2'}>index2</Link></li>
              <Switch>
                 
                  <Route exact path='/index1' component={index1} />
                  <Route exact path='/index2' component={index2} />
               </Switch>
          
           </ul>
           </Router>
           
        )
    }
}

ReactDOM.render(<Ajax/>,document.getElementById("root"));