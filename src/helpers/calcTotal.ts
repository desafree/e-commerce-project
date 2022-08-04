import cartItem from "../typescript/interface/cartItem";

const calcTotal = (arr: cartItem[]) => {
  const newTotal = arr.reduce(
    (prevValue, currValue) => {
      const newPrice =
        currValue.price.finalPrice * currValue.qty + prevValue.price;
      const shipping = 5;
      const newTax = newPrice * 0.2;
      const finalPrice = newPrice + shipping + newTax;

      return {
        price: newPrice,
        shipping: shipping,
        tax: newTax,
        finalPrice: finalPrice,
      };
    },
    {
      price: 0,
      shipping: 0,
      tax: 0,
      finalPrice: 0,
    }
  );

  return newTotal;
};

export default calcTotal;
