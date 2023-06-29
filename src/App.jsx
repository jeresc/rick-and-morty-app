// NPM Packages
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// CSS
import "./App.css";

// Components
import Nav from "./components/Nav.jsx";

// Views
import Home from "./views/Home.jsx";
import About from "./views/About";
import Detail from "./views/Detail";
import NotFound from "./views/NotFound";
import Form from "./views/Form";
import Favorites from "./views/Favorites";

const URL = "https://rickandmortyapi.com/api";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacter] = useState([]);
  const [access, setAccess] = useState(false);
  const [users, setUser] = useState([
    {
      email: "jeresc@gmail.com",
      password: "undechipherable_password01",
    },
    {
      email: "test@test.com",
      password: "test01",
    },
  ]);

  const signUp = (newUserData) => {
    setUser([
      ...users,
      {
        email: newUserData.email,
        password: newUserData.password,
      },
    ]);
  };

  const logIn = (userData) => {
    for (let user of users) {
      if (user.email == userData.email && user.password == userData.password) {
        setAccess(true);
        navigate("/home");
      }
    }
  };

  const logOut = () => {
    setAccess(false);
  };

  const addCharacter = (id) => {
    axios(`${URL}/character/${id}`)
      .then(({ data }) => {
        if (
          data.name &&
          !characters.map((character) => character.name).includes(data.name)
        ) {
          setCharacter((characters) => [...characters, data]);
        }
      })
      .catch((error) => console.error(error));
  };

  const removeCharacter = (id) => {
    setCharacter((characters) =>
      characters.filter((character) => character.id !== id)
    );
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname != "/" && (
        <Nav onSearch={addCharacter} logOut={logOut} />
      )}

      <Routes>
        <Route path="/" element={<Form logIn={logIn} signUp={signUp} />} />
        <Route
          path="/home"
          element={
            <Home characters={characters} removeCharacter={removeCharacter} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
