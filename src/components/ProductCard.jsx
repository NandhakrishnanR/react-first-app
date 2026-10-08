
// function ProductCard({id,name,description,price,image,onAddToCart,}) {
//   return (
//     <div className="product-card">

//       <img src={image} alt={name} />

//       <h2>{name}</h2>

//       <p>{description}</p>

//       <h3>${price}</h3>

//       <Link to={`/products/${id}`}>
//         <Button
//           label="View Details"
//           color="blue"
//         />
//       </Link>

//       <Button
//         label="Add to Cart"
//         color="green"
//         onClick={() => onAddToCart({
//           id,
//           name,
//           price,
//           image,
//         })}
//       />

//     </div>
//   );
// }

import Button from "./Button";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <p>
        <strong>${product.price}</strong>
      </p>

      <Button
        label="Add to Cart"
        color="blue"
        onClick={() => onAddToCart(product)}
      />

      {/* <Link to={`/products/${product.id}`} className="view-details-link">
        View Details
      </Link> */}

    </div>
  );
}

export default ProductCard;