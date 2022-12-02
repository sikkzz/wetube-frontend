import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage/LandingPage";
import Channel from "./pages/ChannelPage/ChannelPage";
import Studio from "./pages/StudioPage/StudioPage";
import Upload from "./components/Upload/Upload";

import UploadPage from "./components/Upload/UploadPage";

import Detail from "./pages/DetailPage/DetailPage";
import ShortsPage from "./pages/ShortsPage/ShortsPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/shorts" element={<ShortsPage />} />
        <Route exact path="/channel" element={<Channel />} />
        <Route exact path="/studio" element={<Studio />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
