import React from "react";
import "./Clamp.css";
import { Link } from "react-router-dom";
const NovelsSiderbarItem = ({ novel, index }) => {
  if (index < 2) {
    return (
      <div className="flex items-start mb-8">
        <div className="max-w-25 mr-5 max-h-31 object-cover">
          <Link to={`/novel/${novel.slug}`}>
            <img src={novel.coverImage} alt={novel.title} />
          </Link>
        </div>
        <div>
          <Link to={`/novel/${novel.slug}`}>
            <h4>{novel.title}</h4>
          </Link>
          <span className="text-[#666]">Rating: {novel.rating}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-w-0">
      <span className="mr-4 mb-2 italic text-[#d86a36]">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>

      <Link to={`/novel/${novel.slug}`}>
        <h4 className="clamp-1 flex-1 min-w-0">{novel.title}</h4>
      </Link>
    </div>
  );
};

export default React.memo(NovelsSiderbarItem);
