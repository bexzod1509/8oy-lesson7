import React, { memo } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "./Create.css";
function Localimages({ files, setFiles }) {
  const handleRemove = (index) => {
    setFiles((prev) => [...prev].filter((_, inx) => inx !== index));
  };
  return (
    <div className="local">
      {Object.values(files)?.map((image, index) => (
        <div key={index} className="local1">
          <img
            src={URL.createObjectURL(image)}
            width={100}
            height={100}
            alt=""
          />
          <IoMdCloseCircle onClick={() => handleRemove(index)} />
        </div>
      ))}
    </div>
  );
}

export default memo(Localimages);
