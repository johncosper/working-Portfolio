import React, { Component } from 'react';
import Card from "../Card/Card";
import projects from "../../projects.json";

class Projects extends Component {
    state = {
      projects,
    };

  render() {
    return(
      <div>
          {this.state.projects.map(project => (
              <Card 
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                href={project.url}
              />
          ))}
      </div>
    )
  }
}

export default Projects;