import Card from "./components/Card";
import Columns from "./components/Columns";
import TextSize from "./components/TextSize";

function App() {
  return (
    <div className="container mx-auto max-w-5xl px-5">
      {/* Components */}
      <Card />
      <Columns />
      <TextSize />
    </div>
  );
}

export default App;
