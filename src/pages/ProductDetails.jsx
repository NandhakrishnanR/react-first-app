import { useParams, useNavigate  } from "react-router-dom";
import products from "../data/products";
import Button from "../components/Button";


function ProductDetails() {
  const { id } = useParams();
const navigate = useNavigate();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
        {/* <button onClick={() => navigate("/products")}>
            ← Back to Products
        </button> */}
        
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <p>{product.description}</p>

      <h2>${product.price}</h2>
      <Button
        label="← Back to Products"
        color="gray"
        onClick={() => navigate("/products")}
        />
    </div>
  );
}

export default ProductDetails;