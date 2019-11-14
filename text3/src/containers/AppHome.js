import React, { Component } from 'react';
import { Carousel, WingBlank,Flex, WhiteSpace } from 'antd-mobile';
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}></div>
  );
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <header>住吧家具</header>
                <WingBlank style={{margin:0}}>
                    <Carousel
                    autoplay={true}
                    infinite={true}
                    slideWidth={1}
                    >
                        <img src={require('../images/lunbo1.jpg')}/>
                        <img src={require('../images/lunbo2.jpg')}/>
                    </Carousel>
                </WingBlank>
                <div className="flex-container">
                    <Flex wrap="wrap">
                        <PlaceHolder className="inline" style={{background:`url(${require('../images/homeimg1.jpg')}) center center no-repeat`,backgroundSize:'110px 110px'}} />
                        <PlaceHolder className="inline" style={{background:`url(${require('../images/homeimg2.jpg')}) center center no-repeat`,backgroundSize:'110px 110px'}} />
                        <PlaceHolder className="inline" style={{background:`url(${require('../images/homeimg3.jpg')}) center center no-repeat`,backgroundSize:'110px 110px'}} />
                    </Flex>
                    <WhiteSpace size="md" />
                </div>
                <footer>
                    <p><span>|</span>&nbsp;&nbsp;&nbsp;&nbsp;热门推荐</p>
                    <div><img src={require('../images/home-footer.jpg')} style={{width:'100%',height:'280px'}} /></div>
                </footer>
            </div>
        )
    }
}