import GlobalStyle from "./GlobalStyles";
import Layout from "./layout/Layout";
import Router from "./Router";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Router />
    </Layout>
  );
}

export default App;
