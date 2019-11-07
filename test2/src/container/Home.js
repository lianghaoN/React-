import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Ask from './Ask';
import Share from './Share';
import Job from './Job';
import Test from './Test';
import More from './More';
export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div className='nav0'>
                <div className='nav1'>
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/ask'}>问答</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/job'}>招聘</Link>
                    <Link to={url+'/test'}>客户端测试</Link>
                </div>
                <div className='nav2'>
                    <Route path={`${url}/all`} component={All} />
                    <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/ask`} component={Ask} />
                    <Route path={`${url}/share`} component={Share} />
                    <Route path={`${url}/job`} component={Job} />
                    <Route path={`${url}/test`} component={Test} />
                    <Route path={`${url}/more`} component={More} />
                    {/* <Route path='/home/:tab' comp} component={Moreonent={List}/> */}
                </div>
            </div>
        )
    }
}