import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import Card from '../../../components/Card/MainCard';

const BasicBadges = () => {
    const buttonVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

    const buttonBadges = buttonVariants.map((variant, idx) => (
        <Button key={idx} variant={variant} className="text-capitalize">
            {variant}
            <Badge variant="light" className="ml-1">
                4
            </Badge>
        </Button>
    ));

    return (
        <React.Fragment>

            <Row>
                <Col className="btn-page">
                    <Card title="Trade Data">{buttonBadges}</Card>

                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicBadges;
