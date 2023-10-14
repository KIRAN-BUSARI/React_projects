import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={ <Home/>} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    {/* <Route path="user" element={<User />} /> */}
    <Route path="user/" element={<User />} >
      {/* This is Method of Dynamic way of getting the parameter  */}
      <Route path=':userid' element={<User/>} />
    </Route>
    <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github />}
    />
    <Route path='*' element={<PageNotFound />} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
