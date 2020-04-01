import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Home extends Component {
    render() {
        return (
            <div className="mt-1 d-flex justify-content-left">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>Nasi Pecel</Card.Title>
                        <Card.Text>
                            Rp. 10.000
                            </Card.Text>
                        <Button variant="primary">Pesan</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>Nasi Campur</Card.Title>
                        <Card.Text>
                            Rp. 8.000
                            </Card.Text>
                        <Button variant="primary">Pesan</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>Nasi Rawon</Card.Title>
                        <Card.Text>
                            Rp. 15.000
                            </Card.Text>
                        <Button variant="primary">Pesan</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    <Card.Body>
                        <Card.Title>Soto Ayam</Card.Title>
                        <Card.Text>
                            Rp. 11.000
                            </Card.Text>
                        <Button variant="primary">Pesan</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}