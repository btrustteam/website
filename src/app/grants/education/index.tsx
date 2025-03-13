import { useState } from "react";
import EducationOverview from "./educationOverview";
import EducationGrantRecipients from "./recipients";

export default function Education({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const [section, setCurrentSection] = useState("");
  return (
    <div>
      {!section && (
        <EducationOverview
          setPage={setPage}
          setCurrentSection={setCurrentSection}
        />
      )}
      {section && (
        <EducationGrantRecipients setCurrentSection={setCurrentSection} />
      )}
    </div>
  );
}
