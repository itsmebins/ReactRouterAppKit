import React from 'react';
import { Link } from 'react-router';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';

const OfferPreview = props => {
  const offer = props.offer;
  const handleClick = ev => {
    ev.preventDefault();
  };

  return (
    <div className="article-preview">
      <div className="article-meta">
            <Link to={`offerDetail/${offer.id}`} className="preview-link">
              <h1>{offer.id}</h1>
            </Link>
        <div className="info">
          <Link className="author" to={`offerDetail/${offer.id}`}>
            {offer.restaurant.name}
          </Link>
          <span className="date">
            {new Date(offer.valid_starting).toDateString()}
          </span>
          <span className="preview-link">
            {offer.restaurant.website}
          </span>
        </div>
      </div>
    </div>
  );
};
OfferPreview.propTypes = {
  offer: React.PropTypes.object
};
export default OfferPreview;
