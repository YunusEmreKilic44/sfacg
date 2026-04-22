import React from "react";
import { Link } from "react-router-dom";

const BookInfo = ({ novel }) => {
  return (
    <section>
      <div className="bg-[#091933] text-white min-h-75 py-6">
        <div className="max-w-300 mx-auto flex">
          <div className="h-60 w-45 mr-16">
            <img
              className="rounded-lg"
              src={novel.coverImage}
              alt={novel.title}
            />
          </div>
          <div>
            <h1 className="text-3xl mb-4">{novel.title}</h1>
            <div className="mb-4">
              <img src="" alt="" />
              <span className="text-sm mr-6">Author: {novel.author}</span>
              <span className="text-sm mr-6">Views: {novel.views}</span>
              <span className="text-sm mr-6">
                Last Updated: {novel.lastUpdate}
              </span>
            </div>
            <div className="mb-4 line-clamp-2">
              <p>{novel.summary}</p>
            </div>
            <div className="text-white">
              <Link
                className="bg-[#FFAD32] rounded-4xl py-2 px-4 mr-2.5"
                to="/"
              >
                Okumak için Tıkla
              </Link>
              <button className="bg-[#FFAD32] outline-0 border-0 mr-2.5 rounded-4xl py-2 px-4">
                Likes
              </button>
              <button className="bg-[#FFAD32] outline-0 border-0 mr-2.5 rounded-4xl py-2 px-4">
                Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookInfo;
