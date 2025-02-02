import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageHeroSection from "./components/PageHeroSection ";
import Services from "./components/Services";
import Topbar from "./components/Topbar";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <div>
        <PageHeroSection />
        <div className="mx-auto max-w-[1240px]">
          <Services />        
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
