import React from "react";
import { Button } from "./ui/button";

const Search = ({ className, params, searchParams }: SearchParamProps) => {
  return (
    <div
      className={`border-2 border-gray-500 rounded-[2rem] shadow-lg shadow-gray-400 h-14 p-2 flex items-center justify-between ${className}`}
    >
      <input
        className="w-full border-none pl-4"
        type="text"
        placeholder="Search Destination..."
      />
      <div>
        <Button className="rounded-[2rem]">Search</Button>
      </div>
    </div>
  );
};

export default Search;
