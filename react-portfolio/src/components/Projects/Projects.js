import React, { Component } from 'react';
import { Card } from "react-mdl";
import projects from "../../projects.json";


class Projects extends Component {
    state = {
        projects
    };

  render() {
    return(
      <div>
          {this.state.projects.map(projects => (
              <Card 
                id={projects.id}
                key={projects.id}
                name={projects.name}
                image={projects.image}
                href={projects.url}
              />
          ))}
      </div>
    )
  }
}

export default Projects;