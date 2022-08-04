interface cartItem {
  productName: string;
  qty: number;
  price: { discount: number; finalPrice: number; retail: number };
  img: string;
}

export default cartItem;
