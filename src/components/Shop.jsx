import { useState, useEffect } from "react";

export default function Shop({ gems, setGems, gps, setGps }) {
  const [upgrades, setUpgrades] = useState([]);

  // fetching upgrade data from the API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`);
      const data = await res.json();
      setUpgrades(data);
    }
    fetchData();
  }, []);

  // function to handle purchasing upgrades
  function handlePurchase(upgrade) {
    if (gems >= upgrade.cost) {
      setGems((prevGems) => prevGems - upgrade.cost);

      // checking if the purchased upgrade is the auto-clicker
      if (upgrade.name === "Auto-Clicker" && !autoClickerActive) {
        setGps((prevGPS) => prevGPS + 1); 
        setAutoClickerActive(true);
      } else {
        setGps((prevGPS) => prevGPS + effectValue); // increasing CPS for other upgrades
      }
      setPurchasedItems((prevItems) => [...prevItems, upgrade]);
    } 
  }

  return (
    <section>
      <h2>SHOP</h2>
      {upgrades.map((upgrade) => (
        <div key={upgrade.id}>
          <h4>{upgrade.name}</h4>
          <p>Costs: {upgrade.cost} | CPS: {upgrade.increase}</p>
          <button onClick={() => handlePurchase(upgrade)}>Buy!</button>
        </div>
      ))}
    </section>
  );
}