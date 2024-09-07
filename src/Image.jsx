
import product from './product';

function Image() {
  return <img src={product.imageUrl} alt={product.name} className="h-[20rem] rounded-lg"  />;
}

export default Image;
