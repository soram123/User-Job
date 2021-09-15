import React , {useState} from 'react'
import { Link, Route} from 'react-router-dom'
import Home from "./Home"
import Apply from './Apply'
import Admin from './Admin'
import AdminInfo from './AdminInfo'
import Nodejs from './Nodejs'
import MeanStack from './MeanStack'
import FullStack from './FullStack'


function App() {
  const [loggedIn, setloggedIn] = useState(false)

  const handleToggle = ()=>{
    setloggedIn(!loggedIn)
  }

  return (
    <div>
      <ul>
         
         <li><Link to="/Home/">Home</Link></li> 
          <li><Link to="/Apply/">Apply</Link></li>
          <li><Link to="/Admin/">Admin</Link></li>
     
      </ul>      

      <Route path="/Apply" component={Apply} />
      <Route path="/Home" component={Home} />
      <Route path="/Admin" render={(props)=>{
        return <Admin {...props} handleToggle={handleToggle} loggedIn={loggedIn}/>
      }} />
      <Route path="/AdminInfo" render={(props)=>{
        return <AdminInfo {...props} handleToggle={handleToggle} loggedIn={loggedIn}/>
      }} />
      <Route path="/Nodejs" render={(props)=>{
        return <Nodejs {...props} handleToggle={handleToggle}/>}} /> 
      <Route path="/MeanStack" render={(props)=>{
        return <MeanStack {...props} handleToggle={handleToggle}/>}} />
      <Route path="/FullStack" render={(props)=>{
        return <FullStack {...props} handleToggle={handleToggle}/>}} />
    </div>
  )
}

export default App;
