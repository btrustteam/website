"use client";
import { useState } from "react";
import Developer from "./developer";
import MainGrant from "./mainGrant";
import Recipients from "./recipients";

export default function GrantContainer() {
  const [currentPage, setCurrentPage] = useState<string>("");
  return (
    <div className="flex flex-col">
      {!currentPage && <MainGrant setPage={setCurrentPage} />}
      {currentPage === "developer" && <Developer setPage={setCurrentPage} />}
    </div>
  );
}
