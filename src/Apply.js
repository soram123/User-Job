import React, {useState} from 'react'
import axios from 'axios'

const Apply = (props)=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')
    const [jobTitle, setJobTitle] = useState('')

    const handleChange = (e)=>{
          if(e.target.name==='name'){
            setName(e.target.value)
          }
          else if(e.target.name==='email'){
            setEmail(e.target.value)
          }
          else if(e.target.name==='phone'){
            setPhone(e.target.value)
          }
          else if(e.target.name==='jobTitle'){
            setJobTitle(e.target.value)
          }
          else if(e.target.name==='experience'){
            setExperience(e.target.value)
          }
          else if(e.target.name==='skills'){
            setSkills(e.target.value)
          }
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      const formData = {
        name: name,
        email: email,
        phone: phone,
        skills: skills,
        jobTitle: jobTitle,
        experience: experience
        
      }
      axios.post('https://dct-application-form.herokuapp.com/users/application-form',formData)
       .then((response)=>{
         const result = response.data 
         console.log(result)
       })
       .catch((err)=>{
         alert(err.message)
       })
       window.location.reload()
       
    }

    return (
        <div>
            <h1>User Job Application</h1> 
            <form onSubmit={handleSubmit}>
          <label>Full name  </label>
          <input type="text" value={name} name="name" onChange={handleChange}></input><br/><br/>
          <label>Email address </label>
          <input type="text" value={email} name="email" onChange={handleChange} placeholder="example@gmail.com"></input><br/><br/>
          <label>Contact number </label>
          <input type="text" value={phone} name="phone" onChange={handleChange} placeholder="+91 998855344"></input><br /><br/>
          <label>Apply for Job  </label>
          <select value={jobTitle} name="jobTitle" onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="Front-End Developer">Front End Developer</option>
            <option value="Node.js Developer">Node.js</option>
            <option value="MEAN Stack Developer">MEAN Stack Developer</option>
            <option value="FULL Stack Developer">Full Stack Developer</option>
          </select><br/><br/>
          <label>Experience </label>
          <input type="text" value={experience} name="experience" onChange={handleChange} placeholder="e.g. 2 years, 3 months"/><br/><br/>
          <label>Technical skills  </label>
          <textarea value={skills} name="skills" onChange={handleChange}/><br /><br />
          <input type="submit" value="Send Application" />
        </form>
        </div>
    )
}
export default Apply