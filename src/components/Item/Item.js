import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import "./Item.scss"

function Item({ data }) {
    const { id, title, price, pictureUrl } = data
    return (
        <Card style={{ width: "18rem" }} id={`card-product-${id}`}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>Descripción corta del producto</Card.Title>
                <Card.Text>${price}</Card.Text>
                <ItemCount stock={3} initial={1} />
                <Button variant="dark">Ver detalles</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;