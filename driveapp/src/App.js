import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { Content } from "./components/Content.js";
import { Footer } from "./components/footer.js";
function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
