import React, { useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";

function Dashboard() {

  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState(null);

  const components = getComponents();

  return (
    <div style={{padding:20,fontFamily:"Arial"}}>

      <h2>Diagram Dashboard</h2>

      <UploadBox setImage={setImage} />

      <div style={{display:"flex",marginTop:20,gap:20}}>

        <div style={{flex:2,border:"1px solid #ccc",padding:10}}>
          <DiagramViewer image={image} />
        </div>

        <div style={{flex:1,border:"1px solid #ccc",padding:10}}>
          <ComponentList
            components={components}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
