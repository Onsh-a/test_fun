import React from 'react';
import Style from './styles/item.module.scss';

const ItemLink = ({ comment }) => {


  return (
    <div className={Style.item_comment}>
      {comment}
      <span className={Style.item_comment_buy_link}> купи.</span>
    </div>
  )
}

export default ItemLink;
