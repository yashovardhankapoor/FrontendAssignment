import React from "react";
import MainLayout from "./mainLayout";

const files = [{ name: "ace-equity.pdf" }];

function App() {
  return (
    <div className="App">
      <MainLayout files={files} />
    </div>
  );
}

export default App;
