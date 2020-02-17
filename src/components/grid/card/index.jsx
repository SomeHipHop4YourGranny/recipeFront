import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';

function Card(props) {
  const { recipe } = props;
  const thumb =
    recipe.imgs.length !== 0
      ? recipe.imgs[0].img.src
      : 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
  return (
    <div className="card">
      <div className="front">
        <img src={thumb} alt="img" />
      </div>
      <div className="back">
        <div className="top">{recipe.title}</div>
        <div className="center">
          <ul>
            <li>
              <a href="/">#грибы</a>
            </li>
          </ul>
        </div>
        <div className="bot">
          <Link to={`recipe/${recipe._id}`}>read more</Link>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.shape({
          src: PropTypes.string,
          title: PropTypes.string,
        }),
      }),
    ),
  }),
};
Card.defaultProps = {
  recipe: {
    title: '',
    imgs: [],
  },
};

export default Card;
