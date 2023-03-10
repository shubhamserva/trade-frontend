import React, { useState } from "react";
import * as XLSX from "xlsx";

function ExcelFileInput(props) {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type === "application/vnd.ms-excel") {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryData = event.target.result;
        const workbook = XLSX.read(binaryData, { type: "binary" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const sheetData = XLSX.utils.sheet_to_json(worksheet);
        setData(sheetData);
      };
      reader.readAsBinaryString(selectedFile);
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
      {data && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelFileInput;
