import { useState } from "react";

export default function StarRating({ startCount = 5 }) {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState();
  return (
    <div className="container">
      {new Array(startCount).fill(0).map((_, index) => {
        return (
          <span
            key={index}
            className={
              (hoverValue === 0 && index < starValue) || index < hoverValue
                ? "gold"
                : ""
            }
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
