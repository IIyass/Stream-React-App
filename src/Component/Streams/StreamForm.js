import React from 'react';
import {Field,reduxForm} from 'redux-form';


import {Streamcreated} from '../Action';
import {connect} from 'react-redux'

class StreamForm extends React.Component{



renderError({error,touched}){
if(error&&touched){
    return (
<div className="ui error message">
<div className="header">{error}</div>
</div>

    );
}}



renderInput =({input,label,meta})=>{

    return (
    <div className="field">
    <label>{label}</label>
    <input {...input} autoComplete="off" />
    {this.renderError(meta)}
    </div>
    );
 }

onsubmit=(formValues)=>{
    this.props.Onbutton(formValues);

}

render(){
return(
    <form  className="ui form error" onSubmit={this.props.handleSubmit(this.onsubmit)} >
    <Field     name='title' component={this.renderInput}       label="Entre Your Name" />
    <Field     name='description'    component={this.renderInput}   label="Entre Your description" />
    <button className="ui button" >Submit</button>
    </form>
);

}
 };

const validate =(formValues)=>{
 const error={title:'',
descriptiom:''}

if(!formValues.title){
    error.title ='You must Enter a title'
}
if(!formValues.description){
    error.description='You must Enter a discription'
}
return error;
};





export default reduxForm({
     form:'StreamForm',
     validate

  })(StreamForm);

 
