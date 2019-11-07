import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Ask extends Component {
    constructor(){
        super();
        this.state=({
            data:[],
            page:1
        });
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&&page='+this.state.page)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
    }
    componentDidUpdate(preProp,preState){
        if(this.state.page != preState.page){
            fetch('https://cnodejs.org/api/v1/topics?tab=ask&&page='+this.state.page)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
        }
        // console.log(this.state.data);
    }
    front=()=>{
        if(this.state.page!=1){
            var page = this.state.page;
            this.setState({
                page:page-1
            })
        }
    }
    back=()=>{
        if(this.state.page!=10){
            var page = this.state.page;
            this.setState({
                page:page+1
            })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((data,index)=>{
                        return(
                            <div className='title-div' key={index}>
                                <img className='all-img' src={data.author.avatar_url}/>
                                <div className='p-div'>
                                    <p className='all-p'>{`${data.reply_count}`}/</p>
                                    <p className='all-p1'>{`${data.visit_count}`}</p>
                                </div>
                                <a to='/more' onClick={()=>{window.location.href=`https://lianghaon.github.io/React-/test2/build/index.html/#/home/more?${data.id}`;console.log(window.location.href)}}>{`${data.title}`}</a>
                                <div className='all-div'>
                                    <img className='all-img2' src={data.author.avatar_url}/>
                                    <p>两天前</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div id='btns'>
                    <button onMouseDown={this.front}>《</button>
                    <button onMouseDown={()=>{this.setState({page:1})}}>1</button>
                    <button onMouseDown={()=>{this.setState({page:2})}}>2</button>
                    <button onMouseDown={()=>{this.setState({page:3})}}>3</button>
                    <button onMouseDown={()=>{this.setState({page:4})}}>4</button>
                    <button onMouseDown={()=>{this.setState({page:5})}}>5</button>
                    <button onMouseDown={()=>{this.setState({page:6})}}>6</button>
                    <button onMouseDown={()=>{this.setState({page:7})}}>7</button>
                    <button onMouseDown={()=>{this.setState({page:8})}}>8</button>
                    <button onMouseDown={()=>{this.setState({page:9})}}>9</button>
                    <button onMouseDown={()=>{this.setState({page:10})}}>10</button>
                    <button onMouseDown={this.back}>》</button>
                </div>
            </div>
        )
    }
}