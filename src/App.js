import Card from "./components/Card";
import Columns from "./components/Columns";
import MaxWidth from "./components/MaxWidth";
import TextSize from "./components/TextSize";

function App() {
  return (
    <div className="container mx-auto max-w-5xl px-5">
      {/* Components */}
      <Card />
      <Columns />
      <TextSize />
      <MaxWidth />
    </div>
  );
}

export default App;
