import Line from "./line";
import TeamDetailsContainer from "./teamDetailContainer";

export default function TeamProfile() {
  return (
    <div className="flex px-[1.5rem] lg:px-[6.5rem] flex-col gap-10 pt-12">
      <Line />
      <TeamDetailsContainer
        isBoard={true}
        title="Inaugural Board (2021 - Present)"
        brief="The Btrust board is responsible for overseeing delivery of the organization's mission."
        teamMembers={[
          {
            name: "Abubakar Nur Khalil",
            description: "Interim Chief Executive Officer and Board Member",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(3)-1rAzPCAWFnIOdqehTlOgUBL3r4QM6q.png",
            twitter: "https://x.com/ihate1999",
            linkedin:
              "https://www.linkedin.com/in/abubakar-nur-khalil-29923b1a0/",
          },
          {
            name: "Carla Kirk-Cohen",
            description: "Board Member",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(4)-vyMxeRlSaKCf5IFsrG0vXGJxxMtIp4.png",
            twitter: "https://x.com/actuallyCarlaKC",
            linkedin: "https://www.linkedin.com/in/carla-kirk-cohen-73342113b/",
          },
          {
            name: "Obi Nwosu",
            description: "Board Member",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Obi Nwosu headshot-puLVoQ4BcCqMpexHbVRSVm7dYb1SXH.png",
            twitter: "https://x.com/obi",
            linkedin: "https://www.linkedin.com/in/obinwosu/",
          },
          {
            name: "Ojoma Ochai",
            description: "Board Member",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(6)-eYgZhLjKVS0dQy1j00YmiBuHvbOpPi.png",
            twitter: "https://x.com/ojomaochai",
            linkedin: "https://www.linkedin.com/in/ojomaochai/",
          },
        ]}
      />
      <Line />
      <TeamDetailsContainer
        isBoard={false}
        title="Operations"
        brief="The day-to-day operations are run by a dedicated team with immense experience in the developer and innovation ecosystem across Africa and beyond. We are committed to bring to life the mission to grow a critical mass of Bitcoin & Lightning open-source developers in the Global South."
        teamMembers={[
          {
            name: "Stephanie Titcombe",
            description: "Program Lead, Btrust Builders",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/20241026_074637-4dWrvwUF6JkaT4shZPHIDfatICxeMm.jpg",
            twitter: "https://x.com/StephTitcombe",
            linkedin: "https://www.linkedin.com/in/stephanietitcombe/",
          },
          {
            name: "Sharon Murugi",
            description: "Social Media and Communications Officer",
            imageUrl:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020%20(8)-LmP0fxJ99jbi46ek3ax7EAwZhcga2y.png",
            twitter: "https://x.com/Murugi___",
            linkedin: "https://www.linkedin.com/in/sharon-murugi/",
          },
        ]}
      />
    </div>
  );
}
