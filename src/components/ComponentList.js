import React from "react";

function ComponentList({ components, selected, setSelected }) {

  return (
    <div>

      <h3>Components</h3>

      {components.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelected(item.id)}
          style={{
            padding:"8px",
            marginBottom:"5px",
            cursor:"pointer",
            border:"1px solid #ddd",
            background:selected===item.id ? "#e6e6e6":"white"
          }}
        >
          {item.name}
        </div>
      ))}

    </div>
  );
}

export default ComponentList;
