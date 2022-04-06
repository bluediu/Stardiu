import React from 'react';

/* Components */
import Loader from '../../utils/loader/Loader';
import CartInfoItem from './CartInfoItem/CartInfoItem';

import PropTypes from 'prop-types';

/* styles */
import './CartInfo.css';

function CartInfo({ products, isLoading }) {
  return (
    <article className="info">
      {isLoading ? (
        <Loader />
      ) : (
        products?.map(({ quantity, productId }) => (
          <CartInfoItem
            key={productId._id}
            productId={productId}
            quantity={quantity}
          />
        ))
      )}
    </article>
  );
}

CartInfo.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CartInfo;
