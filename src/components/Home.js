import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { food1st: 'Nasi Pecel', food2nd: 'Nasi Campur', food3rd: 'Nasi Rawon', food4th: 'Soto Ayam' }
    }
    render() {
        return (
            <div className="mt-1 d-flex justify-content-left">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>{this.state.food1st}</Card.Title>
                        <Card.Text>
                            Rp. 10.000
                            </Card.Text>
                        <Link to='/dashboard'><Button variant="primary">Pesan</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>{this.state.food2nd}</Card.Title>
                        <Card.Text>
                            Rp. 8.000
                            </Card.Text>
                        <Link to='/dashboard'><Button variant="primary">Pesan</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>{this.state.food3rd}</Card.Title>
                        <Card.Text>
                            Rp. 15.000
                            </Card.Text>
                        <Link to='/dashboard'><Button variant="primary">Pesan</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>{this.state.food4th}</Card.Title>
                        <Card.Text>
                            Rp. 11.000
                            </Card.Text>
                        <Link to='/dashboard'><Button variant="primary">Pesan</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}