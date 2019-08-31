import React from 'react';
import Model from '../Model';
import history from '../history';
import {connect} from 'react-redux';
import {Onestream} from '../Action';
import {Link} from 'react-router-dom';
import {Deletstream} from '../Action';


class  DeleteStream extends React.Component{
    componentDidMount(){
        this.props.Onestream(this.props.match.params.id);
    }
    
     RenderAction =()=>{
         return( 
    <React.Fragment>
    <button className="ui approve button" onClick={()=>this.props.Deletstream(this.props.match.params.id)}>Delete</button>
                
    <Link to ="/" className="ui  button" >Cancel</Link>
    </React.Fragment>
    );
     }
    
    render(){
        if(!this.props.stream  ){
            return <div>Loading</div>
        }
    return (
        
        <Model
         title ={"Delete Stream"}
          content={`You want to delete this ${this.props.stream.title}`} 
           action={this.RenderAction()}  
           onDismiss={ () => history.push('/')}
           />
        
        
    );
    }
     };
     const  mapStateToProps=(state,ownProps)=>{
    
        return ({
        stream:state.streams[ownProps.match.params.id]
        });
        
        }
     export default connect(
    mapStateToProps,
         {Onestream,Deletstream}
     )(DeleteStream);
    