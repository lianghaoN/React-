import React, { Component } from 'react'

export default class Silder extends Component {
    onMD=()=>{
        window.location.href="http://localhost:3000/login";
    }
    render() {
        return (
            <div>
                <div>
                    <p>CNode：Node.js专业中文社区</p>
                    <p>您可以<a href="#">登录</a> 或 <a href="#">注册</a>，也可以</p>
                    <button onMouseDown={this.onMD}>通过 Git Hub 登录</button>
                </div>
                <div className='silder1'>
                    <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                    <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                    <img className='silder-img1' src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                </div>
                <div>
                    <div id='silder2'>
                        <p>无人回复的话题</p>
                    </div>
                    <div className='silder3'>
                        <p><a href='#'>发现一款性能比Kong强的开源网关：Goku</a></p>
                        <p><a href='#'>一种支持插件式开发的命令行工具开发模式</a></p>
                        <p><a href='#'>请问缓存的内存模型是什么呢</a></p>
                        <p><a href='#'>Hackers周刊第十期（2019-11-03）</a></p>
                        <p><a href='#'>写了个在测试中，控制函数日志打印的np...</a></p>
                    </div>
                </div>
                <div>
                    <div id='silder2'>
                        <p>积分榜 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOP 100 >></p>
                    </div>
                    <div className='silder3'>
                        <p><a>27150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i5ting</a></p>
                        <p><a>15675 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alsotang</a></p>
                        <p><a>9350 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leapon</a></p>
                        <p><a>9130 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;atian25</a></p>
                        <p><a>8780 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jiyinyiyong</a></p>
                        <p><a>7335 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yakczh</a></p>
                        <p><a>6825 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;im-here</a></p>
                        <p><a>6095 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DevinXian</a></p>
                        <p><a>5815 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chapgaga</a></p>
                        <p><a>5350 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;magicdawn</a></p>
                    </div>
                </div>
                <div>
                    <div id='silder2'>
                        <p>友情社区</p>
                    </div>
                    <div className='silder4'>
                        <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                        <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
                        <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                        <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                    </div>
                </div>
                <div>
                    <div id='silder2'>
                        <p>客户端二维码</p>
                    </div>
                    <div className='silder5'>
                        <p><img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/></p>
                        <p><a>客户端源码地址</a></p>
                     </div>
                </div>
            </div>
        )
    }
}