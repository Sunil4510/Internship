import React from 'react';
import About from './About';
import Home from './Home';
import Error from './Error';
import Name from './Name';
import Navbar from './Navbar';
import Search from './Search';
import User from './User';

import { Route , Switch ,Redirect } from 'react-router-dom';

const Routes = () => {
    return(
            <>
                <Navbar className="Nav"/>
                <br/>
                <Switch>
                    <Route exact path='/' component={() => <Home name="Home"/>} /> 
                    <Route exact path='/about' render={() => <About name="About"/>} />
                    <Route exact path='/search' component={Search}/>
                    <Route path='/about/name/' component={Name} />
                    <Route path='/user/:fname/:lname' component={User} />
                    {/* <Route  component={Error} /> */}
                    <Redirect to='/'/>
                </Switch>
            </>
    );
}

export default Routes;