import React from "react";
import AnimalTypes from "./Components/AnimalTypes";
import FirstPet from "./Components/FirstPet";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NewClient from "./Components/NewClient";
import NumOfPets from "./Components/NumOfPets";
import PetList from "./Components/PetList";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <FirstPet />
        <NumOfPets />
        <NewClient />
        <AnimalTypes />
        <PetList />
      </main>
      <Footer />
    </>
  );
};

export default App;
