import React from 'react';
import OfferPreview from './OfferPreview.js';

const Offers = props => {
  console.log(props)
  if (!props.offers) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.offers === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div className="col-md-9">
      {
        props.offers.map(offer => {
          return (
            <OfferPreview offer={offer} key={offer.id} />
          );
        })
      }
    </div>
  );
};

export default Offers;
