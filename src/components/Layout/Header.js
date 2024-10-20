// src/components/Layout/Header.js
import React from 'react';
import Hobbies from '../Hobbies/Hobbies';
import Communities from '../Communities/Communities';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Container>
        <Row>
            <Col xs={1}>LOGO</Col>
            <Col>
                <Tabs
                defaultActiveKey="profile"
                id="Main menu"
                className="mb-3"
                fill
                >
                    <Tab eventKey="Hobbies" title="Hobbies">
                        <Hobbies/>
                    </Tab>
                    <Tab eventKey="Communities" title="Communities">
                        <Communities/>
                    </Tab>
                </Tabs>
            </Col>
            <Col xs={3}>Seachbar And Login buttons</Col>
        </Row>
    </Container>
  );
};

export default Header;