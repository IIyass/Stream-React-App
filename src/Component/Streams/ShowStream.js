import React from 'react';
import {Onestream} from '../Action';
import {connect} from 'react-redux';
import flv from 'flv.js';

 class   ShowStream extends React.Component{
     constructor(props){
         super(props);
         this.videoRef=React.createRef();
     }
componentDidMount(){
this.props.Onestream(this.props.match.params.id);
this.buildplayer();
}
 
buildplayer (){
if(this.player|| !this.props.stream){
    return;
}
this.player=flv.createPlayer({
    type: 'flv',
    url: `http://localhost:8000/live/${this.props.match.params.id}`
});
this.player.attachMediaElement(this.videoRef.current);
this.player.load();
}










render(){
return (
<div>
    <video ref={this.videoRef} style={{width:"100%"}} controls/>
  <h1>  {this.props.stream.title} </h1>
  <h2>{this.props.stream.description}</h2>
</div>);

}
 };

 const  mapStateToProps=(state,ownProps)=>{
    
    return ({
    stream:state.streams[ownProps.match.params.id]
    });
    
    }
 export default connect(mapStateToProps,

{Onestream}

 )(ShowStream);
