import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Slider from './silder/Slider';
import Login from './container/Login';
import Footers from './footer/Footers';
import More from './container/More';
export default class App extends Component {
    render() {
        return (
            <Router basename="/"> 
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />
                            {/* <Route path={'/more'} component={More} /> */}
                        </div>
                        {/* <div className='nav3'>
                            <Route path={'/more'} component={More} />
                        </div> */}
                        <div className="sider">
                            <Slider />
                        </div>
                    </div>
                </div>
                <Footers/>
            </Router>
        )
    }
}