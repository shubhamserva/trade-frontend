import React, { useState } from "react";
import ExcelJS from "exceljs";

function ExcelFileInput() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];  
    if (selectedFile?.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryData = event.target.result;
        const workbook = new ExcelJS.Workbook();
        workbook.xlsx.load(binaryData).then(() => {
          const worksheet = workbook.getWorksheet(1);
          const sheetData = [];
          worksheet.eachRow((row) => {
            sheetData.push(row.values);
          });
          setData(sheetData);
        });
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {data && (
        <table>
          <thead>
            <tr>
              {data[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
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