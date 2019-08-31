import React from 'react';
import {Allstream} from '../Action/';
import { statement } from '@babel/template';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


 class   StreamList extends React.Component{

    componentDidMount(){
        this.props.Allstream();
    }

// RenderButton(){
// if(this.props.IsSignedIn){

// }
// };

RenderAdmin=(stream)=>{
   
    if(this.props.CurrentUser === stream.UserId  ){
   return(     
       
<div className="right floated content" style={{textAlign:'right'}}>
   <Link className="ui  button " to={`/stream/edit/${stream.id}`} >Edit</Link>
      <Link className="ui button " to={`/stream/delete/${stream.id}`} >Delete</Link>
</div>
    );
    }};

    RenderCreate(){
        if(this.props.IsSignedIn  ){
            return(    
                <div style={{textAlign:'right'}}>
                <Link to="/stream/new" className="ui button primary" style={{textAlign:'right'}}> 
        create stream
         </Link>
         </div>
               
         
             );
             }};

    RenderList (){
     return   this.props.streams.map(stream=>{
            return(
    <div class="ui icon message" key ={stream.id}>
      <i class="large middle aligned icon camera"></i>
      <div class="content">
        <Link to={`/stream/${stream.id}`}  class="header">
         {stream.title}
        </Link>
        <p>{stream.description}</p>
      </div>
      {this.RenderAdmin(stream)}
    </div>
    
    );
    })
};

render(){
  

return(
<div>
   <h1>Streams</h1>
<div className="ui celled list">
 {this.RenderList()}
 </div>  
 {this.RenderCreate()}
 </div>

);


 
}}
const mapStateToProps=(state)=>{
 return {   streams :Object.values(state.streams),
    IsSignedIn:state.auth.IsSignedIn,
CurrentUser:state.auth.UserId};
};

 export default connect(
mapStateToProps,
{Allstream}
 )(StreamList);
