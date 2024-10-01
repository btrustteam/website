import Line from "./line";
import TeamDetailsContainer from "./teamDetailContainer";

export default function TeamProfile() {
  return (
    <div className="flex px-[1.5rem] lg:px-[6.5rem] flex-col gap-10 pt-12">
      <Line />
      <TeamDetailsContainer
        isBoard={true}
        title="Inaugural Board (2021 - Present)"
        brief="The day-to-day operations are run by a dedicated team with immense experience in the developer and innovation ecosystem across Africa and beyond. We are committed to bringing to life the mission to grow a critical mass of Bitcoin & Lightning open-source developers in the Global South."
        teanMembers={[
          {
            name: "Abubakar Nur Khalil",
            description: "Interim Chief Executive Officer and Board Member",
            imageUrl:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(3)-xn1oG1sKovCuOT36USPpM6sxV7IkTi.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Carla Kirk-Cohen",
            description: "Board Member",
            imageUrl:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(4)-ndwCjazTRPG5QfnNqkIycZCnQqfbyi.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Obi Nwosu",
            description: "Board Member",
            imageUrl:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(5)-MSSimd3DL8kQLfP4WgqgA3pUjUa1Og.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Ojoma Ochai",
            description: "Board Member",
            imageUrl:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(6)-4IabG09uQTDuh9YP4ttXTGfCIgKHTO.png",
            github: "/",
            linkedin: "/",
          },
        ]}
      />
      <Line />
      <TeamDetailsContainer
        isBoard={false}
        title="Operations"
        brief="The day-to-day operations are run by a dedicated team with immense experience in the developer and innovation ecosystem across Africa and beyond. We are committed to bringing to life the mission to grow a critical mass of Bitcoin & Lightning open-source developers in the Global South."
        teanMembers={[
          {
            name: "Stephanie Titcombe",
            description: "Programmes Manager, Btrust Builders",
            imageUrl:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(7)-KXL6qKcEELS86GvSjfPr4SwxBwAIKx.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Sharon Murugi",
            description: "Social Media and Communications Officer",
            imageUrl:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(8)-7ZWTPkNg3vdAzfIahm8lwWHQbSQAAM.png",
            github: "/",
            linkedin: "/",
          },
        ]}
      />
    </div>
  );
}
