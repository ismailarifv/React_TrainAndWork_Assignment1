import { createContext,useState,useEffect } from "react";
import PropTypes from 'prop-types'
export const CardContext=createContext();



function CardProvider({children}) {
const [categoriControl,setCategoriControl]=useState(null)
    const [cardItems, setCardItems] = useState(localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems"))
    : []);

    useEffect(() => {
        localStorage.setItem("cardItems", JSON.stringify(cardItems));
      }, [cardItems]);

    const addToCard = (cardItem) => {
      setCardItems((products) => [
        ...products,{...cardItem, quantity: cardItem.quantity ? cardItem.quantity : 1,},
      ]);
      };

    const removeProduct = (itemId) => {
        const filteredSepetItems = cardItems.filter((sepetItem) => {
          return sepetItem._id !== itemId;
        });
    
        setCardItems(filteredSepetItems);
      };
      

  return (
    <CardContext.Provider
    value={{
        cardItems,
        addToCard,
        removeProduct,
        categoriControl,
        setCategoriControl
       
    }}
    >
        {children}
    </CardContext.Provider>
  )
}

export default CardProvider

CardProvider.propTypes ={
    children:PropTypes.node
 }