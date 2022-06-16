import Search from "./components/Search";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <div className="App">
        <Search />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div``;
