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
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(3)-1rAzPCAWFnIOdqehTlOgUBL3r4QM6q.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Carla Kirk-Cohen",
            description: "Board Member",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(4)-vyMxeRlSaKCf5IFsrG0vXGJxxMtIp4.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Obi Nwosu",
            description: "Board Member",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(5)-u9EiilYjJVlJeWhEgpJjToG1LNXXSU.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Ojoma Ochai",
            description: "Board Member",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(6)-eYgZhLjKVS0dQy1j00YmiBuHvbOpPi.png",
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
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(7)-OFvWfXVNZK4Z5Cl8m7HKxuqCpBSgGM.png",
            github: "/",
            linkedin: "/",
          },
          {
            name: "Sharon Murugi",
            description: "Social Media and Communications Officer",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(8)-LmP0fxJ99jbi46ek3ax7EAwZhcga2y.png",
            github: "/",
            linkedin: "/",
          },
        ]}
      />
    </div>
  );
}
