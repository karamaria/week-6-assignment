import { useState, useEffect } from "react";
import Shop from "./components/Shop";
import GemDisplay from "./components/GemDisplay";
import "./App.css";
import gemsound from "./assets/gemsound.mp3";

export default function App() {
  const [gems, setGems] = useState(0);
  const [gps, setGps] = useState(1);
  const [audio] = useState(new Audio(gemsound));

  // loading gems from local storage 
  useEffect(() => {
    const savedGems = localStorage.getItem("gems");
    if (savedGems) {
      setGems(Number(savedGems));
    }
  }, []);

  //saving gems to local storage
  useEffect(() => {
    if (gems > 0) {
      localStorage.setItem("gems", gems);
    }
  }, [gems]);

  // increasing gems every second depending on gps
  useEffect(() => {
    const id = setInterval(() => {
      setGems((prevGems) => prevGems + gps);
    }, 1000);

    return () => clearInterval(id);
  }, [gps]);

  const playgemsound = () => {
    audio.play();
  };

  return (
    <div className="main-container">
      <div className="game-container">
        <GemDisplay gems={gems} />
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d593771-5eab-464a-91a2-1e4af6b88b2f/dfx3g9e-7c2fd3f7-3c1d-468c-85c2-e667ff696fa3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVkNTkzNzcxLTVlYWItNDY0YS05MWEyLTFlNGFmNmI4OGIyZlwvZGZ4M2c5ZS03YzJmZDNmNy0zYzFkLTQ2OGMtODVjMi1lNjY3ZmY2OTZmYTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JI0NmcKO58O0xWLnUcQe8PQ7yJXeDZ6y4jNzz06olHo"
          alt="Ruby"
          className="ruby"
          onClick={() => {
            setGems(gems + 1);
            playgemsound();
          }}
        />
      </div>

      <div className="shop-container">
        <Shop gems={gems} setGems={setGems} gps={gps} setGps={setGps} />
      </div>
    </div>
  );
}