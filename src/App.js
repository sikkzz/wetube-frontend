import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/Landing";
import Channel from "./pages/Channel";
import Studio from './pages/Studio'
import LandingTest from "./pages/LandingTest";
import Test from "./pages/Test";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Landing />} />

      <Route exact path="/channel" element={<Channel />} />
      <Route exact path="/studio" element={<Studio />} />
    </Routes>
      {/* <Test /> */}
      {/* <Landing /> */}
    </>
  );
}

export default App;
