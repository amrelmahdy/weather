import React, {Component} from 'react'
import Header from './../../Components/Header'
import Weather from './../../Components/Weather'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
           <Header />
           <Weather />
        </div>
    }
}


export default Home