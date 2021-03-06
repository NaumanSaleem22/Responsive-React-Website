import "./App.css";
import { Article, Brand, Cta, Navbar, Feature } from "./components";
import {
  Footer,
  Header,
  WhatGPT3,
  Possibility,
  Blog,
  Features,
} from "./containers";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className="section__margin">
        <Brand />
      </div>
      <div>
        <WhatGPT3 className="section__margin" />
      </div>
      <div className="section__margin">
        <Article />
      </div>
      <div className="section__padding2">
        <Possibility />
      </div>
      <div className="section__margin">
        <Cta />
      </div>
      {/* <Blog /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
