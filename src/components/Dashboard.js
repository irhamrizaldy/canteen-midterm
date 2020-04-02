import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Dashboard extends Component {
    userInput;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDepart = this.onChangeDepart.bind(this);
        this.onChangeClassroom = this.onChangeClassroom.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { fullname: '', department: '', classroom: '', food: '' };
    }
    onChangeName(e) {
        this.setState({ fullname: e.target.value })
    }

    onChangeDepart(e) {
        this.setState({ department: e.target.value })
    }

    onChangeClassroom(e) {
        this.setState({ classroom: e.target.value })
    }

    onChangeFood(e) {
        this.setState({ food: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('data-mahasiswa', JSON.stringify(this.state));
    }


    componentDidMount() {
        this.userInput = JSON.parse(localStorage.getItem('data-mahasiswa'));

        if (localStorage.getItem('data-mahasiswa')) {
            this.setState({
                fullname: this.userInput.fullname,
                department: this.userInput.department,
                classroom: this.userInput.classroom
            })
        } else {
            this.setState({
                fullname: '',
                department: '',
                classroom: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('data-mahasiswa', JSON.stringify(nextState));
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicNama">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="Nama Mahasiswa" value={this.state.fullname} onChange={this.onChangeName} />
                </Form.Group>
                <Form.Group controlId="formBasicJurusan">
                    <Form.Label>Jurusan</Form.Label>
                    <Form.Control type="text" placeholder="Jurusan" value={this.state.department} onChange={this.onChangeDepart} />
                </Form.Group>
                <Form.Group controlId="formBasicKelas">
                    <Form.Label>Kelas</Form.Label>
                    <Form.Control type="text" placeholder="Kelas" value={this.state.classroom} onChange={this.onChangeClassroom} />
                </Form.Group>
                <Form.Group controlId="formBasicKelas">
                    <Form.Label>Makanan</Form.Label>
                    <Form.Control as="select" value={this.state.food} onChange={this.onChangeFood}>
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