import Card from "./components/Card";
import Columns from "./components/Columns";
import Input from "./components/Input";
import MaxWidth from "./components/MaxWidth";
import TextSize from "./components/TextSize";
import ToggleDarkMode from "./components/ToggleDarkMode";

function App() {
  return (
    <div className="container mx-auto max-w-5xl px-5">
      <div className="text-center mt-10">
        <a href="https://tailwindcss.com/" target="_blank">
          <span className="text-xl text-cyan hover:text-blue duration-300 uppercase tracking-widest text-center">Take me to Tailwind docs &rarr;</span>
        </a>
      </div>
      {/* Components */}
      <ToggleDarkMode />
      <Card />
      <Columns />
      <TextSize />
      <MaxWidth />
      <Input />
    </div>
  );
}

export default App;
