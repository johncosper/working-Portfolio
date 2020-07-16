import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return(
      <div className='banner-text' style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '48px'}}>Objective</h1>
          <p>As a full stack developer, I am seeking a position with room for growth personally and professionally. 
            My skill set allows for a wide range of roles from front-end web development to back-end database administration. 
            I have experience working in team environments and embrace productive collaboration.
          </p>
          <h1 style={{fontSize: '48px'}}>Work Experience</h1>
        <div style={{textAlign: 'left'}}>
          <p style={{marginBottom: '-20px'}}>Shift Supervisor</p>
          <p style={{marginBottom: '-20px'}}>Chopt Creative Salad Company 2017-2020</p>
          <p style={{marginBottom: '-20px'}}>Assisting management with the organization of workflow for upcoming shifts as well as managing inventory, schedules, and staff. 
            Leading all operations within the store from 2-9 pm daily.
          </p>
          <p>
            <ul style={{fontSize: '15px'}}>Translatable skill sets
              <li style={{marginLeft: '45px'}}>Management of diverse task list</li>
              <li style={{marginLeft: '45px'}}>Personal responsibility and accountability</li>
              <li style={{marginLeft: '45px'}}>Communicating in a way to be understood</li>
              <li style={{marginLeft: '45px'}}>Listening in a way to understand</li>
            </ul>
          </p>
        </div>
        <h1 style={{fontSize: '48px'}}>Professional Skills</h1>
        <div style={{textAlign: 'left'}}>
        <p>
            <ul style={{fontSize: '15px'}}>
              <li style={{marginLeft: '45px'}}>Proficient in Git conflict resolution and merging</li>
              <li style={{marginLeft: '45px'}}>Proficient in web development using HTML, CSS, and Javascript</li>
              <li style={{marginLeft: '45px'}}>Comfortable with MERN stack development</li>
              <li style={{marginLeft: '45px'}}>Experienced with MySQL and MongoDB</li>
              <li style={{marginLeft: '45px'}}>Familiar with object orientated design</li>
            </ul>
          </p>
        </div>
        <h1 style={{fontSize: '48px'}}>Education</h1>
        <p style={{textAlign: 'left'}}>George Washington University Full Stack Development Bootcamp 2020</p>
        <h1 style={{fontSize: '48px'}}>Personal Development in Progress</h1>
        <p style={{textAlign: 'left'}}>Currently in pursuit of further higher education in the form of a Bachelor's Degree</p>
      </div>
    )
  }
}

export default Resume;