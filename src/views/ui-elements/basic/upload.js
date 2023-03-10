import React from 'react';
import {
    Row,
    Col,
    Button,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';

import Card from '../../../components/Card/MainCard';
import ExcelFileInput from '../../../utils/excel';
import ExcelDisplay from '../../../utils/excelInput';
import ExcelDisplay1 from '../../../utils/ee';


const Upload = () => {
    const buttonVariants = ['primary'];

    const basicButtons = buttonVariants.map((variant, idx) => (
        <OverlayTrigger key={idx} overlay={<Tooltip>{variant}</Tooltip>}>
            <Button variant={variant} className="text-capitalize">
                {variant}
            </Button>
        </OverlayTrigger>
    ));

    return (
        <React.Fragment>


            <Row className="btn-page">
                <Col>
                    <Card title="upload the excel file">
                        {basicButtons}
                        <div>
                            <ExcelFileInput />
                            <ExcelDisplay/>
                            <ExcelDisplay1/>
                        </div>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default Upload;
