import Card from "./components/Card";
import Columns from "./components/Columns";
import Input from "./components/Input";
import MaxWidth from "./components/MaxWidth";
import TextSize from "./components/TextSize";
import ToggleDarkMode from "./components/ToggleDarkMode";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="container mx-auto max-w-5xl px-5">
      <div className="text-center mt-10 flex flex-col">
        <a href="https://tailwindcss.com/" target="_blank">
          <span className="text-xl text-cyan hover:text-blue duration-300 uppercase tracking-widest text-center">Take me to Tailwind docs &rarr;</span>
        </a>
        <a href="https://tailwindui.com/" target="_blank">
          <span className="text-xl hover:text-blue duration-300 uppercase tracking-widest text-center">Take me to TailwindUI &rarr;</span>
        </a>
      </div>
      {/* Components */}
      <ToggleDarkMode />
      <Card />
      <Columns />
      <TextSize />
      <MaxWidth />
      <Input />
      <Notification />
    </div>
  );
}

export default App;
