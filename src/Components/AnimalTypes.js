import React from "react";
import "./AnimalTypes.css";

/**
 * AnimalTypes - [Work with arrays]
Convert to functional component
Be able to render a list of animals (already provided)
Be able to add to the list using a form and a submit input,
Do not allow for duplicates
Make sure that cat and cat are all entered as cat
Be able to remove an animal with an on click of a button
 */

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

class AnimalTypes extends React.Component {
  render() {
    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form>
          <label htmlFor="type">
            <input type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>
        <ol></ol>
      </section>
    );
  }
}

export default AnimalTypes;
