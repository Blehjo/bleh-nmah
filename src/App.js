import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/NavBar/NavBar'
import Homepage from './pages/Homepage'
import Faq from './pages/Faq'
import Attachments from './pages/Attachments'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import Footer from './components/Footer/Footer'
import Learn from './pages/Learn'
import AddProfile from './pages/Add-Profile'
import ViewProfile from './pages/ViewProfile'
import EditProfile from './pages/Edit-Profile'
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import ChatPage from './pages/ChatPage';


const url = process.env.NODE_ENV === 'development'
  ? '/graphql' : "https://backend-bleh-nmah.herokuapp.com/";
const httpLink = createHttpLink({
  uri: url,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
