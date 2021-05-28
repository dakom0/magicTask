import "./App.css";
import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [cardSetToFetch, setCardSetToFetch] = useState("");

  return (
    <div className="App">
      <Header setCardSetToFetch={setCardSetToFetch} />
      <Content cardSetToFetch={cardSetToFetch} />
    </div>
  );
}

export default App;
