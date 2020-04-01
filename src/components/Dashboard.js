import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log(e.currentTarget.dataset.id);
    }
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicNama">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="Nama Mahasiswa" />
                </Form.Group>
                <Form.Group controlId="formBasicJurusan">
                    <Form.Label>Jurusan</Form.Label>
                    <Form.Control type="text" placeholder="Jurusan" />
                </Form.Group>
                <Button variant="primary" onClick={this.handleClick}>
                    Submit
                    </Button>
            </Form>
        )
    }
}