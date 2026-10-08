import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      {/* <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div> */}

      {/* You can make this even shorter because the property names are the same: */}
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;