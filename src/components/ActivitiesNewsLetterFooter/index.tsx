import Activities from "../Activities";
import NewsLetter from "../NewsLetter";

export default function ActivitiesNewsletter() {
  return (
    <div className="flex w-full pt-[6.25rem] flex-col items-start">
      <Activities />
      <NewsLetter />
    </div>
  );
}
