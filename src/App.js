import Search from "./components/Search";
import styled from "styled-components";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Container>
      <div className="App">
        {/* <Loader /> */}
        <Search />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div``;
