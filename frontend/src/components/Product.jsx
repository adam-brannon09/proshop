// Import the React Bootstrap Card component
import { Card } from 'react-bootstrap';

// Import the React Router Link component
import { Link } from 'react-router-dom';

// Import the Rating component
import Rating from './Rating';

// Define a React function component called `Product` that takes a product object as a prop
function Product({ product }) {
    // Return a Bootstrap Card component with the following properties:
    return (
        <Card className='my-3 p-3 rounded'>
            {/* Render a Link component to the product page */}
            <Link to={`/product/${product._id}`}>
                {/* Render the product image */}
                <Card.Img src={product.image} variant='top' />
            </Link>

            {/* Add a Card.Body component to contain the product title, rating, and price */}
            <Card.Body>
                {/* Render a Link component to the product page */}
                <Link to={`/product/${product._id}`}>
                    {/* Render the product title as a Card.Title component */}
                    {/* The product-title class keeps all cards the same size by limiting the text to one line */}
                    <Card.Title as='div' className='product-title'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                {/* Render the product rating as a Rating component */}
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                {/* Render the product price as a Card.Text component */}
                <Card.Text as='h3'>
                    {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

// Export the `Product` component
export default Product;
