import React, { useEffect, useState } from "react";
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
    </div>
  );
}

export default App;
