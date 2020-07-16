import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return(
      <div className='banner-text' style={{textAlign: 'center'}}>
        <h1>Contact Page</h1>
        <p>Email: <a href="mailto:johngcosper@gmail.com">johngcosper@gmail.com</a></p>
        <p>Github: <a href="https://github.com/johncosper" target="_blank">https://github.com/johncosper</a></p>
        </div>
    )
  }
}

export default Contact;