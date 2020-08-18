import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {/* this is gonna handle all the routing */}
      <Router>
        {/* if we dont have an user show me a login page otherwise if we have a user then show me rest of page */}
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header />

            <div className='app__body'>
              {/* Sidebar */}
              <Sidebar />

              <Switch>
                {/* Switch checks the route in which we are in --> and based on the roure you are in it will render the appropriate screen */}
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <h1
                    className='welcome'
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      textAlign: 'center',
                      margin: 'auto',
                    }}
                  >
                    <div style={{ color: '#36c6f0' }}>Welcome</div>{' '}
                    <div style={{ color: '#ebb32f' }}>To</div>{' '}
                    <div style={{ color: '#df1d5a' }}>Chit Chat</div>
                  </h1>
                </Route>
              </Switch>

              {/* React-Router --> Chat Screen */}
              {/* when we click on a channel it should show correct chat screen */}
              {/* which means switch channel without refreshing  */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
