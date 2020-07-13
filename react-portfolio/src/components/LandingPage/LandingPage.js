import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <img
              src=""
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
                <h1>John Cosper</h1>
                <h1>Full Stack Web Developer</h1>
                <hr/>
                <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MySQL | MongoDB</p>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;