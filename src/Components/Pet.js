import "./Pet.css";

/**PetList - [Work with an external API, lifecycle method, pass props down to Pet component]
Make an API call to receive all pets (describe below)
Be able to render a list of the animals including their
name
breed
kind
Using the API
Your instructor will either give you the URL for the API you will be accessing or tell you to run the API locally. There will be only one endpoint you will need to hit.

If you need, you can access the API at the following repository. Follow the instructions there to get it installed.

Resource: Veterinarian API
/api/pets
Making a GET request to this path will return an array of pets. The response will look similar to the one below.

[
  {
    id: "dGXf5O9",
    name: "Lady",
    kind: "Dog",
    breed: "Doberman Pinscher",
    employeeId: "z7GIN_i",
  },
  // ...
]; */

export const Pet = ({ name, kind, breed }) => {
  return (
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
};

export default Pet;
