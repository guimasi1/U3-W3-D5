import "./App.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import AlbumComponent from "./components/AlbumComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/album/:id" element={<AlbumComponent />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
