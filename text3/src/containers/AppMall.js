import React, { Component } from 'react';
import { Carousel, WingBlank, Flex,SearchBar } from 'antd-mobile';

export default class AppMall extends Component {
    render() {
        return (
            <div style={{position:"relative"}}>
                <header>商城<img src={require('../images/mall-img1.jpg')}/></header>
                <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{position:"absolute",width:'100%',backgroundColor:'#f5e9e2'}}/>
                <WingBlank style={{margin:0}}>
                    <Carousel
                        autoplay={true}
                        infinite
                        slideWidth={1}
                    >
                        <img src={require('../images/lunbo1.jpg')}/>
                        <img src={require('../images/lunbo2.jpg')}/>
                        <img src={require('../images/lunbo1.jpg')}/>
                        <img src={require('../images/lunbo2.jpg')}/>
                    </Carousel>
                </WingBlank>
                <div className="flex-container3">
                    <Flex>
                        <Flex.Item><div align="center">
                            <img src={require('../images/1.png')}/>
                            <p>桌</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/2.png')}/>
                            <p>床</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/3.png')}/>
                            <p>椅</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/4.png')}/>
                            <p>几</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/5.png')}/>
                            <p>柜</p>    
                        </div></Flex.Item>
                    </Flex>
                    <Flex>
                    <Flex.Item><div align="center">
                            <img src={require('../images/6.png')}/>
                            <p>书架</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/7.png')}/>
                            <p>沙发</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/8.png')}/>
                            <p>家居饰品</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/9.png')}/>
                            <p>户外家具</p>    
                        </div></Flex.Item>
                        <Flex.Item><div align="center">
                            <img src={require('../images/10.png')}/>
                            <p>全部分类</p>    
                        </div></Flex.Item>
                    </Flex>
                </div>
                <div className="flex-container4">
                    <Flex>
                        <Flex.Item align="center">
                            <img src={require('../images/mall2.jpg')}/>
                            <p style={{color:'#7e7e7e',fontSize:'5px'}}>Top&nbsp;Art&nbsp;Studio&nbsp;欧式风格精细...</p>
                            <p style={{fontSize:'5px'}}>￥&nbsp;39.95</p>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../images/mall3.jpg')}/>
                            <p style={{color:'#7e7e7e',fontSize:'5px'}}>顺顺工艺欧式风格塑料外框黑...</p>
                            <p style={{fontSize:'5px'}}>￥&nbsp;83.99</p>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item align="center">
                            <img src={require('../images/mall2.jpg')}/>
                            <p style={{color:'#7e7e7e',fontSize:'5px'}}>Top&nbsp;Art&nbsp;Studio&nbsp;欧式风格精细...</p>
                            <p style={{fontSize:'5px'}}>￥&nbsp;39.95</p>
                        </Flex.Item>
                        <Flex.Item align="center">
                            <img src={require('../images/mall3.jpg')}/>
                            <p style={{color:'#7e7e7e',fontSize:'5px'}}>顺顺工艺欧式风格塑料外框黑...</p>
                            <p style={{fontSize:'5px'}}>￥&nbsp;83.99</p>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        );
    }
}
