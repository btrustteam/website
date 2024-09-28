import PerksCard from "./perksCard";

export default function Perks() {
  return (
    <div className="flex pb-[5.5rem] lg:py-[3.5rem] px-[1.5rem] lg:px-[6.5rem] flex-col justify-center gap-6">
      <h4 className="text-active-white font-poppins text-[1.25rem] font-semibold">
        Each grant will run for six months with grantees receiving:
      </h4>
      <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
        <PerksCard
          heading="Monthly Renumeration"
          text="Each grantee in the cohort will be paid in BTC to work full-time on open-source projects"
        />
        <PerksCard
          heading="Technical and Social Support"
          text="Access to mentors and peer support to navigate any challenges"
        />
        <PerksCard
          heading="Communication Support"
          text="Btrust operations team share regular updates on open-source exploration and contributions"
        />
        <PerksCard
          heading="Proposal Development Support"
          text="Put together competitive, data-backed proposals for more extensive support on the project selected"
        />
      </div>
    </div>
  );
}
