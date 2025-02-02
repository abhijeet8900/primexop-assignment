import Navbar from "./components/Navbar";
import PageHeroSection from "./components/PageHeroSection ";
import Topbar from "./components/Topbar";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <div>
        <PageHeroSection />
      </div>
    </main>
  );
}

export default App;
