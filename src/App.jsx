import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Boost from "./sections/Boost";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="[&>*]:px-4 lg:[&>*]:px-8 mt-4 overflow-x-hidden flex flex-col w-full">
      <Nav />
      <Hero />
      <Stats />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
