import "./App.css";
import { Chart } from "react-google-charts";

const data = [
  ["Activity", "Time"],
  ["Work", 2],
  ["Sleep", 8],
  ["Study", 2],
  ["Meditate", 1],
  ["Read", 2],
  ["Cook", 2],
  ["Walk", 2],
];

const options = {
  title: "Daily Activities",
};

function App() {
  return (
    <div className="App">
      <h1>Daily Activities</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  );
}

export default App;
