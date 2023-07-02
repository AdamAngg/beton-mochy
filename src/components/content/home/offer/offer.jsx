import { items } from "./offer.data";
import { Product } from "./product/product";
import { Offers } from "./offers/offers";
import { offersItems } from "./offer.data";
export const Offer = () => {
  return (
    <>
      <Product items={items} />
      <Offers offers={offersItems} />
    </>
  );
};
