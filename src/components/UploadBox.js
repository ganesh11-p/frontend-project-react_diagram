import React from "react";

function UploadBox({ setImage }) {

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
}

export default UploadBox;
