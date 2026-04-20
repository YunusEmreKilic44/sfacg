import React from "react";
import { useNovelsContext } from "../context/NovelsContext";
import NovelsSiderbarItem from "./NovelsSiderbarItem";

const NovelsSidebar = ({ title }) => {
  const { mostRatedNovels, getRandomNovels } = useNovelsContext();

  const randomNovels = getRandomNovels();

  let layout = [];

  if (title === "En iyi puanlılar") {
    layout = mostRatedNovels.map((novel, index) => (
      <NovelsSiderbarItem key={index} novel={novel} index={index} />
    ));
  } else if (title === "Vip Kitaplar") {
    layout = randomNovels.map((novel, index) => (
      <NovelsSiderbarItem key={index} novel={novel} index={index} />
    ));
  }

  return (
    <aside className="w-100">
      <h2 className="pb-4 text-2xl border-b border-b-[#66666638] mb-4">
        {title}
      </h2>
      <div>{layout}</div>
    </aside>
  );
};

export default NovelsSidebar;
