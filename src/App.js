import React from 'react' 
import Home from './component/home'
import About from './component/about'
import Contact from './component/contact'
import Portfolio from './component/portfolio'
import Resume from './component/resume'
import Pnf  from './component/pnf'



import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Menu from './component/menu'
function App(props){
  return(
    <Router>
      <Menu/>
        <Routes>
          <Route path={`/`} element={<Home/>}></Route>
          <Route path={`/home`} element={<Home/>}></Route>
          <Route path={`/about`} element={<About/>}></Route>
          <Route path={`/portfolio`} element={<Portfolio/>}></Route>
          <Route path={`/resume`} element={<Resume/>}></Route>
          <Route path={`/contact`} element={<Contact/>}></Route>
          <Route path={`/*`} element={<Pnf/>}></Route>
        </Routes>
    </Router>
    
  )
}
export default App
