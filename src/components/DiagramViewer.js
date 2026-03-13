import React, { useState } from "react";

function DiagramViewer({ image }) {

  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom(zoom + 0.1);
  const zoomOut = () => setZoom(zoom - 0.1);
  const reset = () => setZoom(1);

  return (
    <div>

      <div style={{overflow:"hidden"}}>
        {image && (
          <img
            src={image}
            alt="diagram"
            style={{transform:`scale(${zoom})`,width:"100%"}}
          />
        )}
      </div>

      <div style={{marginTop:10}}>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut} style={{marginLeft:5}}>Zoom Out</button>
        <button onClick={reset} style={{marginLeft:5}}>Reset</button>
      </div>

    </div>
  );
}

export default DiagramViewer;
