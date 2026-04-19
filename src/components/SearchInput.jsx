import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative flex items-center z-100 -top-12 left-4">
      <input
        type="text"
        placeholder="Kitap adını giriniz..."
        className="shadow-xl pl-5 h-10 w-75 rounded-4xl bg-white outline-0"
      />
      <Search className="text-orange-700 relative -left-10" />
    </div>
  );
};

export default SearchInput;
