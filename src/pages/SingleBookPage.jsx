import React from "react";
import BookInfo from "../components/BookInfo";
import { useParams } from "react-router-dom";
import { useNovelsContext } from "../context/NovelsContext";

const SingleBookPage = () => {
  const { slug } = useParams();
  const { novelsList } = useNovelsContext();

  const novel = novelsList.find((n) => n.slug === slug);
  if (!novel) return <p>Bulunamadı</p>;
  return (
    <>
      <BookInfo novel={novel} />
    </>
  );
};

export default SingleBookPage;
