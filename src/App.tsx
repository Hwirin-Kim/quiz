import { RecoilRoot } from "recoil";
import GlobalStyle from "./GlobalStyles";
import Layout from "./layout/Layout";
import Router from "./Router";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <GlobalStyle />
        <Router />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
