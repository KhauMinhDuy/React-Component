import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout startTheme="light">
      <div>
        <Header />
        <Speakers />
      </div>
    </Layout>
  );
};

export default App;
