import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Landing from "./pages/LandingPage/Landing";
import Channel from './pages/ChannelPage/Channel'
import Studio from './pages/StudioPage/Studio'
import Upload from './components/Upload/Upload'

import UploadPage from "./components/Upload/UploadPage";

import Detail from './pages/DetailPage/Detail'
import LandingTest from "./pages/LandingTest";
import Test from "./pages/Test";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/channel" element={<Channel />} />
      <Route exact path="/studio" element={<Studio />} />
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/detail" element={<Detail />} />
    </Routes>
      {/* <Test /> */}
      {/* <Landing /> */}
    </>
  );
}

export default App;
