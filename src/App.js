import * as React from "react";
import "./App.css";

function App() {
  const [name, setName] = React.useState(null);
  return (
    <div className="App">
      <h1>{name}</h1>
      <button
        onClick={async () => {
          await new Promise((resolve) => setTimeout(() => resolve(), 500));
          const response = await fetch(
            "https://api.github.com/users/mjetek"
          ).then((r) => r.json());
          setName(response.name);
        }}
      >
        Fetch
      </button>
    </div>
  );
}

export default App;
