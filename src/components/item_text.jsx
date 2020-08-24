import React from 'react';
import Style from './styles/item_text.module.scss'

const ItemText = ({data, isHovered, selected, available}) => {

  return (


      <div className={ available ? `${Style.wrapper}`: `${Style.wrapper_unavailable}`}>
        <span className={
          !selected
            ? `${Style.slogan}`:
          !isHovered
            ? `${Style.slogan}`
            : `${Style.slogan_angry}`
          }>
          {
            !selected
              ? data.slogan:
            !isHovered
              ? data.slogan
              : data.angrySlogan
          }
        </span>
        <span className={Style.title}>
          {data.title}
        </span>
        <span className={Style.filling}>
          {data.filling}
        </span>
        <span className={Style.offer}>
          {data.offer}
        </span>
      </div>

    )
}

export default ItemText;
