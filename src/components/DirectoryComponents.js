import React, { Component } from "react";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorplans: [
        {
          id: 0,
          floorPlan: 1,
          description: "1 Bedroom",
          sqFt: 730,
          bedroom: 1,
          bathroom: 1
        },
        {
          id: 1,
          floorPlan: 2,
          description: "2 Bedroom",
          sqFt: 955,
          bedroom: 2,
          bathroom: 1
        }
      ]
    };
  }

  render() {
    const directory = this.state.floorplans.map((floorplan) => {
      return (
        <div key={floorplan.id} className="col">
          <h3>{floorplan.description}</h3>
          <p>{floorplan.sqFt}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}

export default Directory;
