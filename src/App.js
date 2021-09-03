import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import Details from './pages/Details'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
<Router>
   <QueryClientProvider client={queryClient}>
    <div>
    <Switch>
     <Route path="/dashboard">
     <Dashboard />
   </Route>
     <Route path="/details/:id">
     <Details />
   </Route>
 <HomePage/>
 </Switch>
    </div>
       </QueryClientProvider>
    </Router>
  
  );
}

export default App;
