import { useState } from "react";
import EventAndConferenceGrantRecipients from "./eventRecipient";
import OverviewEventConference from "./overviewEventConference";

export default function EventConference({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const [currentSection, setCurrentSection] = useState("");
  return (
    <div>
      {!currentSection && (
        <OverviewEventConference
          setPage={setPage}
          setCurrentSection={setCurrentSection}
        />
      )}
      {currentSection === "recipient" && (
        <EventAndConferenceGrantRecipients
          setCurrentSection={setCurrentSection}
        />
      )}
    </div>
  );
}
