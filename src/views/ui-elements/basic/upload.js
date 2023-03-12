import React, { useState } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import Card from '../../../components/Card/MainCard';
import ExcelFileInput from '../../../utils/excel';
import ExcelJS from "exceljs";
import axios from 'axios';
import { API_SERVER } from './../../../config/constant';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);

    const handleFileChange = (e) => {
        console.log("EE",e.target)
        const selectedFile = e.target.files[0];
        console.log("file",)  
        if (selectedFile?.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
          setFile(selectedFile);
    
          const reader = new FileReader();
          reader.onload = (event) => {
            console.log("EVENT",event)
            const binaryData = event.target.result;
            const workbook = new ExcelJS.Workbook();
            workbook.xlsx.load(binaryData).then(() => {
              const worksheet = workbook.getWorksheet(1);
              const sheetData = [];
              worksheet.eachRow((row) => {
                sheetData.push(row.values);
              });
              console.log("SHEET",sheetData)
              setData(sheetData);
            });
          };
          reader.readAsArrayBuffer(selectedFile);
        }
      };

    const handleClick = () =>{
        console.log("CLICKED")
        try {
            axios
                .post(API_SERVER + 'users/upload', {
                            data
                })
                .then(function (response) {
                    if (response.data.success) {
                        console.log(response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.error(err);
            }
        }
     

    return (
        <React.Fragment>


            <Row className="btn-page">
                <Col>
                    <Card title="upload the excel file">
                        <div>
                        <input type="file" onChange={handleFileChange} />
                            <ExcelFileInput file = {data} />

                        </div>
                        <Button className="text-capitalize" style={{"marginTop":"20px"}} onClick={handleClick}>
                            Upload
                                </Button>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default Upload;
