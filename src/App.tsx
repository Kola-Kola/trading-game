import React, { ReactElement } from "react";
import LineChart from "./components/LineChart";

function App(): ReactElement {
  return (
    <div data-testid="App" className="App">
      <LineChart />
    </div>
  );
}

export default App;
