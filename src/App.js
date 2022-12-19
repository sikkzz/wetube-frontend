import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ChannelPage from "./pages/ChannelPage/ChannelPage";
import StudioPage from "./pages/StudioPage/StudioPage";
import Upload from "./components/Upload/Upload";
import UploadSetting from "./components/Upload/UploadSetting";
import DetailPage from "./pages/DetailPage/DetailPage";
import ShortsPage from "./pages/ShortsPage/ShortsPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/shorts" element={<ShortsPage />} />
        <Route exact path="/channel" element={<ChannelPage />} />
        <Route exact path="/studio" element={<StudioPage />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/upload_setting" element={<UploadSetting />} />
        <Route exact path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
