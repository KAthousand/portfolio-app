import Layout from "../src/Screens/Shared/Layout/Layout";
import TitleContainer from "../src/Containers/TitleContainer/TitleContainer";
import AboutContainer from "../src/Containers/AboutContainer/AboutContainer";
import WorkContainer from "../src/Containers/WorkContainer/WorkContainer";
import ContactContainer from "../src/Containers/ContactContainer/ContactContainer";
import "../src/App.css";

function App() {
  return (
    <div>
      <Layout>
        <TitleContainer />
        <AboutContainer />
        <WorkContainer />
        <ContactContainer />
      </Layout>
    </div>
  );
}

export default App;
