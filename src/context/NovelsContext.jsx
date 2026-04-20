import { createContext, useContext, useState } from "react";
import novels from "../data/novels";

const NovelsContext = createContext(null);

const NovelsContextProvider = ({ children }) => {
  const [novelsList, setNovelsList] = useState(novels);

  const getMostPopularNovels = () => {
    const sortedNovels = [...novelsList].sort((a, b) => b.views - a.views);
    return sortedNovels.slice(0, 10);
  };

  const getMostRatedNovels = () => {
    const popularNovels = [...novelsList].sort((a, b) => b.rating - a.rating);
    return popularNovels.slice(0, 10);
  };

  const getNewestNovels = () => {
    const newestNovels = [...novelsList].sort(
      (a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate),
    );
    return newestNovels.slice(0, 10);
  };

  const getRandomNovels = () => {
    const randomNovels = [...novelsList].sort(() => Math.random() - 0.5);
    return randomNovels.slice(0, 10);
  };

  return (
    <NovelsContext
      value={{
        novelsList,
        getMostPopularNovels,
        getMostRatedNovels,
        getNewestNovels,
        getRandomNovels,
      }}
    >
      {children}
    </NovelsContext>
  );
};

export const useNovelsContext = () => useContext(NovelsContext);

export default NovelsContextProvider;
