import Image from "next/image";
type DishProps = {
  id: number;
  title: string;
  img: string;
  price: string;
};
const SingleOrder = ({ dish }: { dish: DishProps }) => {
  const { img, price, title } = dish;
  return (
    <div className="box p-2 bg-primary/5 dark:bg-bg3 rounded-2xl">
      <div className="box p-3 rounded-2xl relative">
        <Image
          width={173}
          height={122}
          src={img}
          className="w-full"
          alt="food img"
        />
      </div>
      <div className="mt-4 md:mt-6 px-4 pb-4">
        <p className="font-semibold mb-2">{title}</p>
        <p className="text-xl font-semibold mb-2 text-primary">${price}</p>
        <div className="flex items-center gap-3">
          <span>6.87km</span>
          <span className="text-primary">•</span>
          <span>47 min</span>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
