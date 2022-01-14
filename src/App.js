import GlobalStyled from "./components/styled/commonStyled/GlobalStyled";
import GlobalWrapper from "./components/styled/commonStyled/GlobalWrapper";

import Header from "./components/common/Header";
import Main from "./components/main/Main";
import SearchResult from "./components/search/SearchResult";
import Channel from "./components/channel/Channel";
import Recent from "./components/recent/Recent";
import Upload from "./components/upload/Upload";

import VideoModal from "./components/videoModal/VideoModal";
import NotFound from "./components/common/NotFound";
import { Route, Routes } from "react-router-dom";
import Test from "./Test";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyled />
        <div className="App">
          <GlobalWrapper>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="channel" element={<Channel />} />
              <Route path="upload" element={<Upload />} />
              <Route path="recent" element={<Recent />} />
              <Route path="search" element={<SearchResult />} />

              <Route path="*" element={<NotFound />} />
              <Route path="test" element={<Test />} />
            </Routes>
          </GlobalWrapper>
        </div>
      </Provider>
    </>
  );
}

export default App;
