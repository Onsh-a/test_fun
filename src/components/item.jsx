import React from 'react';
import Style from './styles/item.module.scss'

const Item = ({data, available, handleSelect, selected}) => {

  return (
  //     <div className={Style.elem}>
  //     <div id={data.id} onClick={handleSelect} className={!available
  //       ? `${Style.item_container} ${Style.item_disabled}`
  //       : selected
  //         ? `${Style.item_container} ${Style.item_selected}`
  //         : Style.item_container}>
  //
  //     <div className={Style.item_text_wrapper}>
  //       <span className={Style.item_slogan}>
  //         {data.slogan}
  //       </span>
  //       <span className={Style.item_title}>
  //         {data.title}
  //       </span>
  //       <span className={Style.item_filling}>
  //         {data.filling}
  //       </span>
  //       <span className={Style.item_offer}>
  //         {data.offer}
  //       </span>
  //     </div>
  //     <div className={Style.item_quant}>
  //       <span className={Style.item_quant_numb}>
  //         {data.weight}
  //       </span>
  //       <span className={Style.item_quant_unit}>
  //         {data.unit}
  //       </span>
  //     </div>
  //   </div>
  //
  //   <span className={!available ? Style.item_comment_sold : Style.item_comment}>
  //     {
  //       !available
  //         ? data.soldOut :
  //       !selected
  //         ? data.callToAction
  //         : data.tasteDetail
  //     }
  //   </span>
  //
  // </div>);
  // }

  <div className={Style.item} id={data.id}>
    <div id={data.id} onClick={handleSelect} className={!available
        ? `${Style.item_card} ${Style.item_card_disabled}`
        : selected
          ? `${Style.item_card} ${Style.item_card_selected}`
          : Style.item_card}>

      <div className={Style.item_text_wrapper}>
        <span className={Style.item_text_slogan}>
          {data.slogan}
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
      
      <div className={Style.item_quant}>
        <span className={Style.item_quant_numb}>
          {data.weight}
        </span>
        <span className={Style.item_quant_unit}>
          {data.unit}
        </span>
      </div>
    </div>

</div>)
}

export default Item;
