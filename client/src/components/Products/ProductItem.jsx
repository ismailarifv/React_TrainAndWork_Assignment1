import PropTypes from "prop-types";
import "./ProductItem.css";
import { CardContext } from "../../context/CardProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ProductItem({ productItem }) {
  
  const { cardItems, addToCard } = useContext(CardContext);

  const filteredProduct = cardItems.find(
    (cardItem) => cardItem._id === productItem._id
  );
  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <div className="product-item glide__slide glide__slide--active">
    <div className="product-image">
      <Link to={`product/${productItem._id}`}>
      <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img2" />
      </Link>
    </div>
    <div className="product-info">
      <a href="$" className="product-title">
      {productItem.name}
      </a>
      <ul className="product-star">
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </ul>
      <div className="product-prices">
      <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
          <span className="old-price">{originalPrice.toFixed(2)}₺</span>
      </div>
      <span className="product-discount">-{productItem.price.discount}%</span>
      <div className="product-links">
      <button
            className="add-to-cart"
            onClick={() =>
              addToCard({
                ...productItem,
                price: discountedPrice,
              })
            }
            disabled={filteredProduct}
          >
          <i className="bi bi-basket-fill"></i>
        </button>
        
        <Link to={`product/${productItem._id}`} className="product-link">
          <i className="bi bi-eye-fill"></i>
        </Link>
        
      </div>
    </div>
    </div>
  )
}

export default ProductItem

ProductItem.propTypes = {
  productItem: PropTypes.object,
  setCardItems: PropTypes.func,
};