import React from 'react';

import {Route, Link} from 'react-router-dom';

import './css.css';

import Home from './views/Home';
import About from './views/About';
import View from "./views/View";
import NavLink from "react-router-dom/modules/NavLink";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    name: 'iPhone XR',
                    price: 542500
                },
                {
                    id: 2,
                    name: 'Apple iPad Air 3',
                    price: 377700
                },
                {
                    id: 3,
                    name: 'Macbook Pro 15.4',
                    price: 1949900
                },
                {
                    id: 4,
                    name: 'Apple iMac',
                    price: 1629900
                },
                {
                    id: 5,
                    name: 'Apple Magic Mouse',
                    price: 72900
                },
                {
                    id: 6,
                    name: 'Apple Watch Series 4',
                    price: 599900
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <h1>React路由</h1>
                <hr/>

                <nav>
                    <NavLink to="/" activeStyle={{color: 'red'}}>首页</NavLink>
                    <span> | </span>
                    <NavLink to="/about" activeStyle={{color: 'red'}}>关于我们</NavLink>
                </nav>
                <hr/>

                <Route path="/" exact render={(props) => <Home items={this.state.items} {...props} />} />
                <Route path="/view/:id(\d+)" render={(props) => {
                    return <View {...props} items={this.state.items} />
                }} />
                <Route path="/about" component={About}/>
            </div>
        )
    }

}

export default App;