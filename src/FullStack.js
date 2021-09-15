import React,{useState,useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import {Link} from 'react-router-dom'

const FullStack =(props)=>{

    const {handleToggle} = props
    const [FullStackDev, setFullStackDev] = useState([])

    useEffect(()=>{
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
         .then((response)=>{
             const result = response.data 
             console.log(result)
             setFullStackDev(result)
         })
         .catch((err)=>{
             alert(err.message)
         })
      },[])

      const fullstack = FullStackDev.filter((ele)=>{
          return ele.jobTitle =='FULL Stack Developer'
      })

      const handleView = (id)=>{
        axios.get(`https://dct-application-form.herokuapp.com/users/application-form/${id}`)
         .then((response)=>{
             const result = response.data 
             alert(` ${result.name}  profile

             Contact Number      ${result.phone}
                    Email               ${result.email}
                    Skills              ${result.skills}
                    Experience          ${result.experience}
             `)
         })
         .catch((err)=>{
             alert(err.message)
         })
    }

    const handleShortlist = (id)=>{
        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:"shortlisted"})
         
    }

    const handleRejected = (id)=>{
        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:"rejected"})
            
    }

    return (
        <div>
            
            <h1>Admin Dashboard</h1>
                         <ul>
                             <li><Link to="/AdminInfo">Front-End Developer</Link></li>
                             <li><Link to="/Nodejs">Nodejs</Link></li>
                             <li><Link to="/MeanStack">MEAN Stack Developer</Link></li>
                             <li><Link to="/FullStack">Full Stack Developer</Link></li>
                         </ul>
                        <h1>FULL Stack Developers</h1>
                        <h2>List of candidates applied for FULL Stack developer job</h2>
                        <table>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Technical Skills</th>
                                <th>Experience</th>
                                <th>Applied Date</th>
                                <th>View Details</th>
                                <th>Update Application Status</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                {
                                     fullstack.map((ele)=>{
                                        return (
                                                <tr key={ele._id}>
                                                    <td>{ele.name}</td>
                                                    <td>{ele.skills}</td>
                                                    <td>{ele.experience}</td>
                                                    <td>{moment(ele.createdAt).format('l')}</td>
                                                    <td><button onClick={()=>{
                                                        handleView(ele._id)
                                                    }}>View Details</button></td>
                                                   {ele.status=='shortlisted' &&
                                                       <td><button>Shortlisted</button></td> }
                                                    {ele.status=='rejected' &&
                                                       <td><button>Rejected</button></td> }
                                                   {ele.status=='applied' &&
                                                       <td><button onClick={()=>{
                                                           handleShortlist(ele._id)
                                                       }}>Shortlist</button><button onClick={()=>{
                                                           handleRejected(ele._id)
                                                       }}>Reject</button></td>
                                                   } 
                                                </tr>
                                                
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <button onClick={()=>{
                            handleToggle()
                            props.history.push('/Admin')
                        }}>Logout</button>
            
        </div>
    
        
    )
}
export default FullStack