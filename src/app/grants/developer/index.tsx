import { useState } from "react";
import Recipients from "../recipients";
import OverviewDeveloper from "./overview";

export default function Developer({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const [section, setSection] = useState("");
  return (
    <div>
      {!section && (
        <OverviewDeveloper setPage={setPage} setSection={setSection} />
      )}
      {section && <Recipients setPage={setSection} currentPage={section} />}
    </div>
  );
}
