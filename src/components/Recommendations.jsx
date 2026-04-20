import React from "react";
import { useNovelsContext } from "../context/NovelsContext";
import RecommendationsItem from "./RecommendationsItem";

const Recommendations = () => {
  const { getRecommendedNovels } = useNovelsContext();

  const recommendedNovels = getRecommendedNovels(6);

  return (
    <div className="bg-[#282828] text-white">
      <div className="max-w-300 flex mx-auto py-4 justify-center">
        {recommendedNovels.map((recommendedNovel) => (
          <RecommendationsItem
            key={recommendedNovel.id}
            recommendedNovel={recommendedNovel}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
