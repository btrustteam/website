export default function FooterLink({
  links,
}: {
  links: { name: string; url: string }[];
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={
            "text-black-3 font-poppins text-[0.875rem] w-full leading-[157.143%]"
          }
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
