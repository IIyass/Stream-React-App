import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';




const Header = ()=>{

    return(

<div className="ui menu">
      <a className="header item">
              <Link to='/' className='item'>
                    Stream
              </Link>
        </a>

       <a className="right menu" >
                
                       <GoogleAuth/>
                
         </a>
 
</div>

    );
}

export default Header ;