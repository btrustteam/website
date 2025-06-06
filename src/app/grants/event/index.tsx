import { useState } from "react";
import EventGrantRecipients from "./eventRecipient";
import OverviewEvent from "./overviewEvent";

export default function Event({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const [currentSection, setCurrentSection] = useState("");
  return (
    <div>
      {!currentSection && (
        <OverviewEvent
          setPage={setPage}
          setCurrentSection={setCurrentSection}
        />
      )}
      {currentSection === "recipient" && (
        <EventGrantRecipients
          setCurrentSection={setCurrentSection}
        />
      )}
    </div>
  );
}
