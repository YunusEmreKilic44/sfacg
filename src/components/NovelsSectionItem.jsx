import React from "react";
import { Link } from "react-router-dom";

const fallbackCover =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 360'><rect width='260' height='360' fill='%23f3e2d3'/><rect x='18' y='18' width='224' height='324' rx='16' fill='%23fff7f0' stroke='%23cf8a56' stroke-width='4'/><text x='50%25' y='46%25' text-anchor='middle' fill='%23995b2f' font-family='Arial' font-size='24'>No Cover</text><text x='50%25' y='56%25' text-anchor='middle' fill='%23a56d46' font-family='Arial' font-size='16'>Image unavailable</text></svg>";

const NovelsSectionItem = ({ popularNovel }) => {
  return (
    <div className="w-32.5 mr-15 mb-4">
      <div className="max-w-fit">
        <Link to={`/novel/${popularNovel.slug}`}>
          <img
            className="w-fit max-h-41"
            src={popularNovel.coverImage}
            alt={popularNovel.title}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackCover;
            }}
          />
        </Link>
        <h3 className="py-1.25 text-center">
          <Link to={`/novel/${popularNovel.slug}`}>{popularNovel.title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default React.memo(NovelsSectionItem);
