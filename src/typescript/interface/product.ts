interface product {
  id: string;
  categoryName: string;
  itemName: string;
  itemIntro: string;
  itemPrice: { retail: number; discount: number; finalPrice: number };
  itemFeature: string;
  itemContent: { name: string; qty: number }[];
  categoryAbout: { title: string; text: string };
  img: string[];
  categoryImg: string;
}

export default product;
