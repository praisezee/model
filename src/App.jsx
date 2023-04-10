import React from "react"
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Missing from "./components/Missing"

const App = () =>
{
  

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="client">
          <Route index />
          <Route path="register" />
          <Route path="login"/>
        </Route>
        <Route path="model" >
          <Route index />
          <Route path="register" />
          <Route path="login" />
        </Route>
        <Route path="*" element={<Missing/>}/>
      </Route>
    </Routes>
  )
}

export default App;
