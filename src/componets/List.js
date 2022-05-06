import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
    
  state={
    users:[],
    isFirst: true,
    isLoading: false,
    err:'',
  }

 
componentDidMount(){
  this.token=  PubSub.subscribe('steven',(_,stateObj)=>{
    this.setState(stateObj)
    })
}
componentWillUnmount(){
    PubSub.unsubscribe(this.token)
}

    render() {
        const {users,isFirst,isLoading,err}=this.state
      
        return (
            <div style={{width:'100%'}}>
            <div>
                {
                    isFirst? <h2>Nice to meet you</h2>:
                    isLoading?<h2>Loading...........</h2>:
                    err? <h2>{err}</h2>:
                    users.map((usersObj) => {
                        return (
                            <div key={usersObj.id} style={{width:'30%',display:'inline-block' }}>
                                <a rel="noneferrer" href={usersObj.html_url} target="_blank">
                                    <img alt="head_portrait" src={usersObj.avatar_url} style={{ width: '30%'}} />
                                </a>
                                <p>{usersObj.login}</p>
                            </div>
                        )
                    })
                }
            </div></div>
        )
    }
}
