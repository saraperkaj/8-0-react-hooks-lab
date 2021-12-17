import React from "react";
import "./NewClient.css";

/**
 * NewClient - [Work with strings, work with multiple stateful properties]
Convert to functional component
Make sure your form contains:
firstName, type "text"
lastName, type "text"
phone, type "tel"
email, type "email"
Render the values in an article alongside the form as you type
 */

class NewClient extends React.Component {
  render() {
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </form>
          <article>
            <h5>firstName</h5>
            <h5>lastName</h5>
            <h5>phone</h5>
            <h5>email</h5>
          </article>
        </div>
      </section>
    );
  }
}

export default NewClient;
