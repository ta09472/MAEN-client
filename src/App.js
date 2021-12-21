import Header from "./components/Header";
import ContentBlock from "./components/ContentBlock";
import GlobalStyled from "./components/styled/GlobalStyled";
import GlobalWrapper from "./components/styled/GlobalWrapper";

function App() {
  return (
    <GlobalWrapper>
      <GlobalStyled />
      <div className="App">
        <Header />
        <ContentBlock />
      </div>
    </GlobalWrapper>
  );
}

export default App;
