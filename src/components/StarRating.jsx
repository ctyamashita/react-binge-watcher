import React from 'react';

const StarRating = (props) => {
  const { rating, totalVotes } = props;

  return (
    <div className='text-end'>
      <h4><i className="fas fa-star text-warning"></i><strong> {rating}</strong><small>/10</small></h4>
      {/* <h3 className='mb-0'>{'★'.repeat(parseInt(rating)) + '☆'.repeat(10 - parseInt(rating))}</h3> */}
      <p className='m-0'>{totalVotes} votes</p>
    </div>
  );
};

export default StarRating;
