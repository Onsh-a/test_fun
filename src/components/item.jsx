import React from 'react';
import Style from './styles/item.module.scss';
import ItemText from './item_text'
import ItemLink from './item_link'

const Item = ({data, available, handleSelect, selected}) => {

  const [isHovered, setHovered] = React.useState(false);

  let handleHover = (e) => {
    setHovered(true)
  }

  let handleOffHover = (e) => {
    setHovered(false)
  }

  return (

  <div onMouseOver={ handleHover } onMouseOut={ handleOffHover } className={Style.item} id={data.id}>
    <div id={data.id} onClick={handleSelect} className={!available
        ? `${Style.item_card} ${Style.item_card_disabled}`
        : selected
          ? `${Style.item_card} ${Style.item_card_selected}`
          : Style.item_card}>


        <ItemText data={data} isHovered={isHovered} selected={selected} available={available} />


      <div className={Style.item_quant}>
        <span className={Style.item_quant_numb}>
          {data.weight}
        </span>
        <span className={Style.item_quant_unit}>
          {data.unit}
        </span>
      </div>

    </div>
    <span className={!available ? Style.item_comment_sold : Style.item_comment}>
      {
        !available
          ? data.soldOut :
        !selected
          ? <ItemLink comment={data.callToAction}/>
          : data.tasteDetail
      }
    </span>

</div>)
}

export default Item;
