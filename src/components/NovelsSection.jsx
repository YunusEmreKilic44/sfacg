import React from "react";
import { useNovelsContext } from "../context/NovelsContext";
import NovelsSectionItem from "./NovelsSectionItem";

const NovelsSection = ({ sectionTitle }) => {
  const { mostPopularNovels, newestNovels } = useNovelsContext();
  let layout = [];

  if (sectionTitle === "Popüler Kitaplar") {
    layout = mostPopularNovels.map((popuarNovel) => (
      <NovelsSectionItem key={popuarNovel.id} popuarNovel={popuarNovel} />
    ));
  } else if (sectionTitle === "Yeni Kitaplar") {
    layout = newestNovels.map((popuarNovel) => (
      <NovelsSectionItem key={popuarNovel.id} popuarNovel={popuarNovel} />
    ));
  }

  return (
    <section className="max-w-300 mx-auto">
      <h2 className="text-2xl pb-4 mb-4 border-b border-b-[#66666638]">
        {sectionTitle}
      </h2>
      <div className="grid grid-cols-5 w-200">{layout}</div>
    </section>
  );
};

export default NovelsSection;
