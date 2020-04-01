import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Home } from './Home';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { fullname: '', department: '', classroom: '', selectValue: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert('Pesanan anda diterima: ' + "\n" +
            "Nama: " + this.state.fullname + "\n" +
            "Jurusan: " + this.state.department + "\n" +
            "Kelas: " + this.state.classroom + "\n" +
            "Makanan: " + this.state.selectValue);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <Form onSubmit={this.mySubmitHandler}>
                <Form.Group controlId="formBasicNama">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" name="fullname" placeholder="Nama Mahasiswa" onChange={this.myChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formBasicJurusan">
                    <Form.Label>Jurusan</Form.Label>
                    <Form.Control type="text" name="department" placeholder="Jurusan" onChange={this.myChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formBasicKelas">
                    <Form.Label>Kelas</Form.Label>
                    <Form.Control type="text" name="classroom" placeholder="Kelas" onChange={this.myChangeHandler} />
                </Form.Group>
                <Form.Group controlId="formBasicKelas">
                    <Form.Label>Makanan</Form.Label>
                    <Form.Control as="select" name="selectValue" onChange={this.myChangeHandler}>
                        <option value="N/A">N/A</option>
                        <option value="Nasi Pecel">Nasi Pecel</option>
                        <option value="Nasi Campur">Nasi Campur</option>
                        <option value="Nasi Rawon">Nasi Rawon</option>
                        <option value="Soto Ayam">Soto Ayam</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                    </Button>
            </Form>
        )
    }
}