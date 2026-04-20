import React from "react";

const RecommendationsItem = ({ recommendedNovel }) => {
  return (
    <div className="mr-8">
      <div className="w-45">
        <img
          className=""
          src={recommendedNovel.coverImage}
          alt={recommendedNovel.title}
        />
      </div>
      <h3 className="text-center mt-2 text-xl">{recommendedNovel.title}</h3>
    </div>
  );
};

export default RecommendationsItem;
