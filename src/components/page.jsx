import React from 'react';
import Item from './item';
import Class from './styles/page.module.scss';

const Container = ({ data }) => {

  // eslint-disable-next-line
  const [goods, setGoods] = React.useState(data)


  let handleSelect = (e) => {
    let clicked = parseInt(e.target.id);

    for (let product of data){

      if (product.id === clicked && product.available){
        product.selected = !product.selected;
      }

    }
    setGoods({goods: data})
  }

  let items = data.map((item, i) => {
    return <Item handleSelect={handleSelect} key={i} data={item} available={item.available} selected={item.selected}/>
  })

  return (
    <div className={Class.container}>

      { items }

    </div>
  );
}

export default Container;
