import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', price:5000 , title:'새우깡' , description:'맛있고 즐거운 새우 맛'},
  {id: 'p2', price:20000 , title:'햇반' , description:'주식대용 쌀'},
  {id: 'p3', price:30000 , title:'매일우유' , description:'건강한 우유 '}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}

      </ul>
    </section>
  );
};

export default Products;
