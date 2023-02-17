import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <div>THIS IS THE MELI CHALLENGE</div>
      <div>
        <p>{data}</p>
      </div>
      <Header />
    </div>
  );
}

export default App;
