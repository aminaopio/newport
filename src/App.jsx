import "./app.scss";
import About from "./components/About/About";
import CV from "./components/CV/CV";
import Homepage from "./components/Homepage/Homepage";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/navbar/Navbar";

const App = () => {
return (<div>
    <section id="Homepage">
        <Navbar/>
        <Homepage/>
    </section>
    <section id="About"><About/></section>
    <section id= "CV"><CV/></section>
    <section id="Portfolio"><Portfolio /></section>
</div>
);
};

export default App;