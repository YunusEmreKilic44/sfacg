import React from "react";
import NovelsSidebar from "../components/NovelsSidebar";
import NovelsSection from "../components/NovelsSection";
import ImageSlider from "../components/ImageSlider";
import Recommendations from "../components/Recommendations";

const HomePage = () => {
  
  return (
    <main>
      <ImageSlider />
      <div className="flex max-w-300 mx-auto  pt-2.5 pb-3.75 text-sm">
        <NovelsSection sectionTitle={"Popüler Kitaplar"} />
        <NovelsSidebar title={"En iyi puanlılar"} />
      </div>
      <div className="flex max-w-300 mx-auto  pt-2.5 pb-3.75 text-sm">
        <NovelsSection sectionTitle={"Yeni Kitaplar"} />
        <NovelsSidebar title="Vip Kitaplar" />
      </div>
      <Recommendations />
    </main>
  );
};

export default React.memo(HomePage);
