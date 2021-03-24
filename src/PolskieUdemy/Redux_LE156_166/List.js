// import React from "react";
// import {connect} from 'react-redux';
// import Element from './Element';

//! dziala z connect
// const List = ({ ratesInProps }) => {
//   const ratesElements = ratesInProps.map((rate) => (
//     <Element key={rate.id} {...rate} />
//   ));
//   return (
//   <ul>
//       {ratesElements}
//   </ul>
//   );
// };
// const connectReduxStateToProps = store => ({
//     ratesInProps: store.rates,
// })
// const ListConsumer = connect(connectReduxStateToProps)(List)
// export default ListConsumer;


//* a tu z useSelector jest krotszy zapis
import React from "react";
import {useSelector} from 'react-redux';
import Element from './Element';

const List = () => {
  const rates = useSelector(store => store.rates)
  const ratesElements = rates.map((rate) => (
    <Element key={rate.id} {...rate} />
  ));
  return (
  <ul>
      {ratesElements}
  </ul>
  );
};

export default List;
