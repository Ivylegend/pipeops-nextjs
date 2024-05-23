import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = ({ className, params, searchParams }: SearchParamProps) => {
  return (
    <div
      className={`border-2 border-gray-200 rounded-[2rem] h-14 p-2 flex items-center justify-between ${className}`}
    >
      <Input
        type="email"
        placeholder="Search Destination..."
        className="border-none focus:border-none focus-visible:border-none"
      />
      <Button className="rounded-[2rem]">Search</Button>
    </div>
  );
};

export default Search;
