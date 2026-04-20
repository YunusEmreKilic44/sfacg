import { createContext, useCallback, useContext, useMemo, useState } from "react";
import novels from "../data/novels";

const NovelsContext = createContext(null);

const NovelsContextProvider = ({ children }) => {
  const [novelsList, setNovelsList] = useState(novels);

  const mostPopularNovels = useMemo(
    () => [...novelsList].sort((a, b) => b.views - a.views).slice(0, 10),
    [novelsList],
  );

  const mostRatedNovels = useMemo(
    () => [...novelsList].sort((a, b) => b.rating - a.rating).slice(0, 10),
    [novelsList],
  );

  const newestNovels = useMemo(
    () =>
      [...novelsList]
        .sort((a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate))
        .slice(0, 10),
    [novelsList],
  );

  const getRandomNovels = useCallback(
    () => [...novelsList].sort(() => Math.random() - 0.5).slice(0, 10),
    [novelsList],
  );

  const value = useMemo(
    () => ({
      novelsList,
      mostPopularNovels,
      mostRatedNovels,
      newestNovels,
      getRandomNovels,
    }),
    [novelsList, mostPopularNovels, mostRatedNovels, newestNovels, getRandomNovels],
  );

  return <NovelsContext value={value}>{children}</NovelsContext>;
};

export const useNovelsContext = () => useContext(NovelsContext);

export default NovelsContextProvider;
