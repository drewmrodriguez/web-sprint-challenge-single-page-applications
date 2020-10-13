import React, { Component } from 'react'
import { blue300 } from 'material-ui/styles/colors'
import { Link } from 'react-router-dom'

 class HomePage extends Component {
     
    render() {
        return (
            <div>
                <h1 style={{ color: blue300}}>LAMBDA EATZ</h1>
                <Link to="/Form" className="waves-effect waves-light btn-large">Order Pizza</Link>
            </div>
        )
                    
    }
}

export default HomePage