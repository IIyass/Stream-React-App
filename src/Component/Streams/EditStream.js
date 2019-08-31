import React from 'react';
import { connect } from 'react-redux';
import {Onestream} from '../Action';
import StreamForm from './StreamForm'
import {Streamedited} from '../Action';
import _ from 'lodash';

class   EditStream extends React.Component{
componentDidMount(){
    this.props.Onestream(this.props.match.params.id);

}

onsubmit = (FormValues)=>{
    this.props.Streamedited(this.props.match.params.id,FormValues);
}
render(){
    if(!this.props.stream){
        return <div>Loading ...</div>
    }
   return(
       <div>
           <h2>Edit stream</h2>
           <StreamForm Onbutton={this.onsubmit} initialValues={_.pick(this.props.stream,'title','description')}/>
       </div>
   )
}}

const  mapStateToProps=(state,ownProps)=>{

return ({
stream:state.streams[ownProps.match.params.id]
});

}

 export default connect(
     mapStateToProps,
     {Onestream,Streamedited}
 )( EditStream);
