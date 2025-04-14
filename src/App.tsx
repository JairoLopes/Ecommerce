import NavBar from "./components/NavBar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import Plants from "./components/Plants";

function App() {
  return (
    <main>
      {/* NAVBAR */}
      <NavBar />
      <MobileNavbar />

      {/* HERO */}
      <Hero />

      {/* PLANTS */}
      <Plants />
    </main>
  );
}

export default App;
