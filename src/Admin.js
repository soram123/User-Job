import React,{useState} from 'react' 

const Admin = (props)=>{
    const {handleToggle,loggedIn} = props

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handleChange = (e)=>{
        if(e.target.name==="username"){
            setUsername(e.target.value)
        }
        else if(e.target.name==="password"){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault() 
        if(username==='admin' && password==='admin'){
            
            console.log('successfully logged in')
            handleToggle()
            props.history.push("/AdminInfo")
        }
        else (
            alert('please enter the correct credentials')

        )
    }

    return (<div>
        {loggedIn ? props.history.push('/AdminInfo') : 
                (
                    <div>
                    <h1>Admin</h1>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Username</label><br/>
                        <input type="text" value={username} name="username" onChange={handleChange}></input><br/><br/>
                        <label>Password</label><br/>
                        <input type="text" value={password} name="password" onChange={handleChange}></input><br/><br/>
                        <input type="submit" />
                    </form>
                  
                </div>
                )
    }
       </div> 
    )
}
export default Admin