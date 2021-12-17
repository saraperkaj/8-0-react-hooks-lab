import React from "react";
import Pet from "./Pet";
import "./PetList.css";

/**
 * PetList - [Work with an external API, lifecycle method, pass props down to Pet component]
Make an API call to receive all pets (describe below)
Be able to render a list of the animals including their
name
breed
kind
 */

const BASE_URL = "http://localhost:5000/api";

class PetList extends React.Component {
  render() {
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article></article>
      </section>
    );
  }
}

export default PetList;
