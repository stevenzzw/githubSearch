import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        
        const { value } = this.node
       
    //   this.props.uppdateApp({ isFirst: false, isLoading: true })
        PubSub.publish('steven',{ isFirst: false, isLoading: true })
       
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(
                res => {
                    //this.props.uppdateApp({ isLoading: false, users: res.data.items })
                    PubSub.publish('steven',{ isLoading: false, users: res.data.items })
       
                    console.log(res.data.items);

                },
                err => { PubSub.publish('steven',{ err:err.message, isLoading: false }) }
            )
    }



    render() {
        return (
            <div style={{ width: '600px', position: 'relative', }}>
                <input ref={c => this.node = c} type="text" placeholder="input name" />
                <button onClick={this.search}>search</button>
            </div>
        )
    }
}
