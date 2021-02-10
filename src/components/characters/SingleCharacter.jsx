import React from 'react';
import PropTypes from 'prop-types';

const SingleCharacter = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

SingleCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SingleCharacter;
