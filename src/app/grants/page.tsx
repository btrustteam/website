"use client";
import { useState } from "react";
import MainGrant from "./mainGrant";
import Recipients from "./recipients";
export default function Grants() {
  const [currentPage, setCurrentPage] = useState<string>("");
  return (
    <div className="flex flex-col">
      {!currentPage && <MainGrant setPage={setCurrentPage} />}
      {currentPage && (
        <Recipients setPage={setCurrentPage} currentPage={currentPage} />
      )}
    </div>
  );
}
