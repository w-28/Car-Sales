import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  // console.log(props,'asdfgasdfasdfa')
  
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

let mapStateToProps = state => {
  // console.log({state})
  return {
    car: {
      image: state.car.car.image,
      name: state.car.car.name,
      price: state.car.car.price
    }
  };
};

export default connect(mapStateToProps, {})(Header);
