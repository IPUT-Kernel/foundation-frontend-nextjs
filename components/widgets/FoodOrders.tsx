import CartItem from "../foodDelivery/CartItem";
import OptionsVertical from "../shared/OptionsVertical";
const cartItems = [
  {
    id: 1,
    title: "Penne Arrabbiata",
    price: "$5.86",
    img: "/images/cart/item-1.png",
  },
  {
    id: 2,
    title: "Sushi Rolls",
    price: "$5.86",
    img: "/images/cart/item-2.png",
  },
  {
    id: 3,
    title: "Burger Deluxe",
    price: "$5.86",
    img: "/images/cart/item-3.png",
  },
  {
    id: 4,
    title: "Pad Thai",
    price: "$5.86",
    img: "/images/cart/item-4.png",
  },
  {
    id: 5,
    title: "Miso Soup",
    price: "$5.86",
    img: "/images/cart/item-5.png",
  },
  {
    id: 6,
    title: "Burger Deluxe",
    price: "$5.86",
    img: "/images/cart/item-3.png",
  },
];
const FoodOrders = () => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box xl:p-10">
      <div className="flex justify-between items-center mb-6 pb-6 bb-dashed">
        <p className="font-medium">Food Orders</p>
        <OptionsVertical />
      </div>
      <div className="flex flex-col gap-6 ">
        {cartItems.map((item) => (
          <CartItem cart={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodOrders;
