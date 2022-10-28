import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h2>MS3</h2>
      </div>
      <FileUpload />
      <video id="videoPlayer" width="50%" controls muted="muted" autoplay>
        <source
          src="http://localhost:8080/stream/IMG_0773.MOV"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default App;
