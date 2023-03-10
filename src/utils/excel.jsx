import React, { useState } from "react";

function ExcelFileInput(props) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type === "application/vnd.ms-excel") {
      setFile(selectedFile);
    } else {
      alert("Please select a valid Excel file");
    }
  };

  return (
    <div>
      <label htmlFor="file-input">Select Excel File:</label>
      <input
        id="file-input"
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ExcelFileInput;
