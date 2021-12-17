import React from "react";
import "./FirstPet.css";

/**
 * FirstPet - [Work with a Boolean]
Convert to functional component
Use a checkbox to update state of firstPet to have a value true or false
Use conditional rendering to render the word No if the checkbox is unchecked
Use conditional rendering to render the word Yes if the checkbox is checked
 */

class FirstPet extends React.Component {
  render() {
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" />
        </form>
        <h5></h5>
      </section>
    );
  }
}

export default FirstPet;
