import React from 'react';
import StreamForm from './StreamForm';

import {Streamcreated} from '../Action';
import {connect} from 'react-redux'

class CreatStream extends React.Component{


onsubmit=(formValues)=>{
    this.props.Streamcreated(formValues);
}

render(){
return(
    <div>
    <div>Create Stream</div>
    <StreamForm Onbutton ={this.onsubmit}/>
    </div>
);

}
 };

  export default connect(
      null,
      {Streamcreated}
  ) (CreatStream);
