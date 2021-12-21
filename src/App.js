import GlobalStyled from "./components/styled/GlobalStyled";
import GlobalWrapper from "./components/styled/GlobalWrapper";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Channel from "./components/Channel";

function App() {
  return (
    <GlobalWrapper>
      <GlobalStyled />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </div>
    </GlobalWrapper>
  );
}

export default App;
