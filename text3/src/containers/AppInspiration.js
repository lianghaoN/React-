import React, { Component } from 'react';
import { Flex} from 'antd-mobile';
export default class AppInspiration extends Component {
    render() {
        return (
            <div>
                <header>灵感<img src={require('../images/inspiration1.jpg')} style={{height:'28px',width:'28px'}} /></header>
                <nav>
                    <ul>
                        <li>推荐</li>
                        <li>冬季</li>
                        <li>宜家</li>
                        <li>小清新</li>
                        <li>小户型</li>
                        <li>个性色彩</li>
                        <li>+</li>
                    </ul>
                </nav>
                <div className="flex-container2">
                    <Flex wrap="wrap">
                        <Flex.Item className="flex-container2"><img style={{width:'180px',height:'280px'}} src={require('../images/inspiration11.jpg')}/></Flex.Item>
                        <Flex.Item className="flex-container2"><img style={{width:'180px',height:'280px'}} src={require('../images/inspiration2.jpg')}/></Flex.Item>
                    </Flex>
                    <Flex wrap="wrap">
                        <Flex.Item className="flex-container2"><img style={{width:'180px',height:'280px'}} src={require('../images/inspiration3.jpg')}/></Flex.Item>
                        <Flex.Item className="flex-container2"><img style={{width:'180px',height:'280px'}} src={require('../images/inspiration4.jpg')}/></Flex.Item>
                    </Flex>
                    <Flex wrap="wrap">
                        <Flex.Item className="flex-container2"><img style={{width:'180px',height:'280px'}} src={require('../images/inspiration11.jpg')}/></Flex.Item>
                        <Flex.Item className="flex-container2"><img style={{width:'180px',height:'280px'}} src={require('../images/inspiration2.jpg')}/></Flex.Item>
                    </Flex>
                </div>
            </div>
        );
    }
}