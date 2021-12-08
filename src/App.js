import './App.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
       <Header />
       <Sidebar />
       <Content />
       <Footer />
    </div>
  );
}

export default App;
