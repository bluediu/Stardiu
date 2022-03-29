import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTE } from '../../../constants/auth-routes';

/* Components */
import {
  MDBBadge,
  MDBIcon,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';

function ShoppingCart() {
  let history = useHistory();
  const { total } = useSelector((state) => state.shoppingCart);

  return (
    <div>
      <MDBNavbarLink
        className="me-3 pointer"
        onClick={() => history.push(ROUTE.CART)}
      >
        <MDBBadge pill color="danger">
          {total ? total : '0'}
        </MDBBadge>
        <span>
          <MDBIcon fas icon="shopping-cart"></MDBIcon>
        </span>
      </MDBNavbarLink>
    </div>
  );
}

export default ShoppingCart;
