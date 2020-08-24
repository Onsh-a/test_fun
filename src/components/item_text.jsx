import React from 'react';
import Style from './styles/item_text.module.scss'

const ItemText = ({data, available, handleSelect, selected}) => {

  const [isHovered, setHovered] = React.useState(false);

  let handleHover = (e) => {
    setHovered(true)
  }

  let handleOffHover = (e) => {
    setHovered(false)
  }

  return (


      <div className={Style.item_text_wrapper}>
        <span className={
          !selected
            ? `${Style.item_text_slogan}`:
          !isHovered
            ? `${Style.item_text_slogan}`
            : `${Style.item_text_slogan_angry}`
          }>
          {
            !selected
              ? data.slogan:
            !isHovered
              ? data.slogan
              : data.angrySlogan
          }
        </span>
        <span className={Style.item_text_title}>
          {data.title}
        </span>
        <span className={Style.item_text_filling}>
          {data.filling}
        </span>
        <span className={Style.item_text_offer}>
          {data.offer}
        </span>
      </div>

    )
}

export default ItemText;
