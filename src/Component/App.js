import React from 'react';
import {Router,Link,Route,Switch} from 'react-router-dom';
import StreamList from './Streams/StreamList';
import CreatStream from './Streams/CreatStream';
import EditStream from './Streams/EditStream';
import DeleteStream from './Streams/DeleteStream';
import ShowStream from './Streams/ShowStream';
import Header from './Header';
import history from './history';


const App = ()=>{

return(
    

<Router history={history}>
 <div className="ui container" >
         <Header/>
         <Switch>
                <Route path="/" exact component={StreamList}/>
                <Route path="/stream/new" exact component={CreatStream}/>
                <Route path="/stream/delete/:id" exact component={DeleteStream}/>
                <Route path="/stream/edit/:id" exact component={EditStream}/>
                <Route path="/stream/:id" exact component={ShowStream}/>
         </Switch>
</div>
</Router>

    );

};

export default App;
