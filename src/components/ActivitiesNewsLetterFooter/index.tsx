import Activities from "../Activities";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter";

export default function ActivitiesNewsletterAndFooter() {
  return (
    <div className="flex w-full pt-[6.25rem] flex-col items-start">
      <Activities />
      <NewsLetter />
    </div>
  );
}
