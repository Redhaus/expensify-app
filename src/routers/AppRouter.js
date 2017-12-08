import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpense';
import ExpenseDashboardPage from '../components/Dashboard';
import EditPage from '../components/EditExpense';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

// create a var to hold routes, 
// Only use browserRouter once with a single element
// Use as many route as needed

// Routes are just functional components 
///edit/:id provides a wildcard var that can be fed or grabbed dynamically

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditPage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
       
    </BrowserRouter>
)

//setting exact prop is a extra third prop to require absolute match
// Switch will go through each route until it finds a match
//Link replaces anchor tags
export default AppRouter;