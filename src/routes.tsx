import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Planets from './components/planets/planets'
import Single from './components/single'


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Planets} exact path="/"/>
            <Route component={Single} exact path="/planet/:id"/>
        </BrowserRouter>
    )
}

export default Routes