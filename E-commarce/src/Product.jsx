import { useState, useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css"
const Products = () => {
  const [product, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
        console.log(product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mt-4 d-flex flex-wrap justify-content-center">
        {product.map((item) => (
          <div className="m-3" key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" className="pro-img" src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.Title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Price {item.price}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
