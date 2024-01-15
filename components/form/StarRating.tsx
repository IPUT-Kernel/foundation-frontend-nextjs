import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { useState } from "react";

const StarRating = ({
  totalStars = 5,
  initialRating = 4,
  onChange,
}: {
  totalStars?: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (clickedRating: number) => {
    setRating(clickedRating);
    if (onChange) {
      onChange(clickedRating);
    }
  };

  return (
    <div className="flex gap-1 text-primary">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        let IconComponent;
        if (starValue <= rating) {
          IconComponent = <IconStarFilled size={20} />;
        } else {
          IconComponent = <IconStar size={20} />;
        }

        return (
          <span
            key={index}
            className="cursor-pointer"
            onClick={() => handleStarClick(starValue)}>
            {IconComponent}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
