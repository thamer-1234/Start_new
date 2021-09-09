import React from 'react';
import axios from 'axios';
class Axios extends React.Component {

  state = {
    users: []
  }

  componentDidMount =()=>{
   axios.get(`https://jsonplaceholder.typicode.com/users`)
   .then(res=>{
const users =res.data;
this.setState({users})
   })
   
  }

  render() {
    return (
      <div>
        <ul>
     { this.state.users.map(user => <li>user:{user.name}</li>)}
     { this.state.users.map(user => <li>Email:{user.email}</li>)}

        </ul>
      </div>
    );
  }
}

export default Axios;