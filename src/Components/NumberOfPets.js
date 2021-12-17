import React from "react";
import "./NumberOfPets.css";

/**
 * NumOfPets - [Work with numbers, work with multiple functions]
Convert to a functional component
Add two buttons one that says - and one that says +
On click of + increase the number of pets by 1
On click of - decrease the number of pets by 1, Do not allow for a negative amount of pets
 */

class NumberOfPets extends React.Component {
  render() {
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>numOfPets</h5>
        <div>
          <button id="less">-</button>
          <button id="more">+</button>
        </div>
      </section>
    );
  }
}

export default NumberOfPets;
