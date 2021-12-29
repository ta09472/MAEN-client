import GlobalStyled from "./components/styled/commonStyled/GlobalStyled";
import GlobalWrapper from "./components/styled/commonStyled/GlobalWrapper";

import Header from "./components/common/Header";
import Main from "./components/main/Main";
import Channel from "./components/channel/Channel";
import Recent from "./components/recent/Recent";
import Upload from "./components/upload/Upload";
import Modal from "react-modal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyled />
      <div className="App">
        <GlobalWrapper>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/recent" element={<Recent />} />
          </Routes>
        </GlobalWrapper>
      </div>
    </>
  );
}

export default App;
