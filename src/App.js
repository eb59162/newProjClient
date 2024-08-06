import './App.css';
import React, { Suspense, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import io from 'socket.io-client';

const Home = React.lazy(() => import("./componnent/Home"))
const User = React.lazy(() => import("./componnent/User"))
const Story = React.lazy(() => import('./componnent/Story'));
const About = React.lazy(() => import("./componnent/About"))
const Login=React.lazy(()=>import("./componnent/Login"))
const SignUp=React.lazy(()=>import("./componnent/SignUp"))
const Chat=React.lazy(()=>import("./Chat/Chat"))
const HomeChat=React.lazy(()=>import("./Chat/Home-CHat/HomeChat"))
const socket = io.connect('http://localhost:4000');


function App() {
  const [value, setValue] = React.useState('one');
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const handleChange = (event, newValue) => {
    debugger
    setValue(newValue);
    
  };
  return (
    <>
      <div className="App">
        <h1 style={{ color: 'crimson' }}>חוויות מלחמה</h1>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="gray"
            indicatorColor="gray"
            aria-label="secondary tabs example"
          >
            <nav style={{ margin: 'auto' }}>
              <Link to="/Story" style={{ margin: '2%' }}>
                <Tab value="one" label="סיפורים וחוויות" >
                </Tab>
              </Link>
              <Link to="/User" style={{ margin: '2%' }}>
                <Tab value="two" label="משתמשים" />
              </Link>
              <Link to="/About" style={{ margin: '2%' }}>
                <Tab value="three" label="אודותינו" />
              </Link>
              <Link to="/" style={{ margin: '2%' }}>
                <Tab value="four" label="דף הבית" />
              </Link>
              <Link to="/Login" style={{ margin: '2%' }}>
                <Tab value="five" label="Log In" />
              </Link>
              <Link to="/SignUp" style={{ margin: '2%' }}>
                <Tab value="six" label="Sign Up" />
              </Link>
              <Link to="/Chat" style={{ margin: '2%' }}>
                <Tab value="seven" label="Chat" />
              </Link>
              <Link to="/HomeChat" style={{ margin: '2%' }}>
                <Tab value="eight" label="Chat home" />
              </Link>
            </nav>
          </Tabs>
        </Box>
        {/* <Router> */}
        <Routes>
          <Route path='/' element={<Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><Home /></Suspense>} />
          <Route path='/User' element={<Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><User /></Suspense>} />
          <Route path='/Story' element={<Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><Story /></Suspense>} />
          <Route path='/About' element={<Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><About /></Suspense>} />
          <Route path='/Login' element={<Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><Login /></Suspense>} />
          <Route path='/SignUp' element={<Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><SignUp /></Suspense>} />
         <Route path='/Chat' element={<Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><Chat username={username} room={room} socket={socket} /></Suspense>}/>
         <Route path='/HomeChat' element={ <Suspense fallback={<h1 style={{ color: "crimson" }}>loading..</h1>}><HomeChat username={username} setUsername={setUsername} room={room} setRoom={setRoom} socket={socket} /></Suspense>}/>
        </Routes>
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
