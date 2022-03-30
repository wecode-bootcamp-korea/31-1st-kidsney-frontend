import 'Components/RecoProductList/RecoProduct/RecoProduct.scss';

const RecoProduct = ({ product }) => {
  const { id, name, price, image_url, chracter, detail } = product;

  return (
    <div className="RecoProduct">
      <img alt="thumbnail" src={image_url} />
      <button>
        <i class="far fa-heart" />
      </button>
      <h3>{name}</h3>
      <div className="price">${price}</div>
    </div>
  );
};

export default RecoProduct;
