import React from 'react';
import {connect} from 'react-redux'
import {signIn,signOut} from './Action';


class   GoogleAuth extends React.Component {
 
componentDidMount(){


    window.gapi.load('client:auth2', ()=>{
              
        window.gapi.client.init({
            clientId:'540580303198-at2c2a4aj986ashi1vhv5oci36cil5cv.apps.googleusercontent.com',
            scope:'email'
        }).then(()=>{
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthchange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthchange);
        })
        
    });
}

 

onAuthchange = (isSgnedIn) =>{
   if(isSgnedIn){
       this.props.signIn(this.auth.currentUser.get().getId())
   }
   else{
       this.props.signOut()
   }
};



OnsingOut=() =>{ 
    this.auth.signOut() 
 };
OnsingIn=() =>{
     this.auth.signIn() 
     };


    RenderMethode(){
        
        if(this.props.IsSignedIn===true) {

             return( <button className="ui red google button" onClick={this.OnsingOut  }>
                 <i className="google icon"/>
                 Sign Out
                 </button>
              );
             }
         
             else {
              return( <button className="ui red google button" onClick={this.OnsingIn }>
                  <i className="google icon"/>
                  Sign In
                  </button>
              );
            }
    };

render() {

return <div>{this.RenderMethode()}</div>;

}
};
const mapStateToProps=(state)=>{
return { IsSignedIn:state.auth.IsSignedIn }
}
export default connect(
    mapStateToProps,
    {signIn,signOut}
    ) (GoogleAuth); 