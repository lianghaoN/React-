import React, { Component, createElement } from 'react'
// import html from 'jquery';
var num =1;
export default class More extends Component {
    constructor(){
        super();
        this.state=({
            data:[]
        });
    }
    componentDidMount(){
        if(window.location.href.split('?')[1]){
            fetch('https://cnodejs.org/api/v1/topic/'+window.location.href.split('?')[1])
                .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        data:res.data
                    })
                })
        }
        console.log(window.location.href.split('?'));
        console.log(this.state.data);
    }
    componentDidUpdate(){
        // if(num ==1){
        //     fetch('https://cnodejs.org/api/v1/topic/'+window.location.href.split('?')[1])
        //     .then(res=>res.json())
        //     .then(res=>{
        //         this.setState({
        //             data:res.data
        //         })
        //     })
        //     num=0;
        // }
        console.log(this.state.data);
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
        )
    }
}