"use client";
import { useState } from "react";
import Developer from "./developer";
import Education from "./education";
import MainGrant from "./mainGrant";

export default function GrantContainer() {
  const [currentPage, setCurrentPage] = useState<string>("");
  return (
    <div className="flex flex-col">
      {!currentPage && <MainGrant setPage={setCurrentPage} />}
      {currentPage === "developer" && <Developer setPage={setCurrentPage} />}
      {currentPage === "education" && <Education setPage={setCurrentPage} />}
    </div>
  );
}
