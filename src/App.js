import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/NavBar/NavBar';
import Homepage from './pages/Homepage';
import Paintings from './pages/Paintings';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Login from './pages/Login';


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
  const [attachment, setAttachment] = useState('');

  return (
    <ApolloProvider client={client}>
       <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/paintings' element={<Paintings />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
