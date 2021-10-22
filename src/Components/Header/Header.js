import React from 'react';
import { FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <>
            <Container>
                <InputGroup className="my-3 w-50 mx-auto">
                    <FormControl
                        placeholder="Search meals here"
                        aria-label="Search meals here"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </Container>
        </>
    );
};

export default Header;