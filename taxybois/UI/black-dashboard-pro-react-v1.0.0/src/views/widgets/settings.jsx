/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    CardText,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    ListGroupItem,
    ListGroup,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class Settings extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="6">
                            <Card style={{ width: '40rem' }}>
                                <CardBody>
                                    <CardTitle>Add Accounts</CardTitle>
                                    <CardText></CardText>
                                    <Button href="/#" color="">Go somewhere</Button>


                                    <Col md="4" sm="5">
                                        <Button color="facebook">
                                            <i className="fab fa-facebook-square" /> Share · 2.2k
                                    </Button>
                                    </Col>


                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Settings;
