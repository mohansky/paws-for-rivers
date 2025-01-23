import { Icon } from "@iconify/react";
import ContactLink from "./contact-link";

export default function Address({href, icon, text}: {href: string, icon: string, text: string[]}) {
  return (
    <>
      <ContactLink href={href} title="Address">
        <div className="flex">
          <Icon icon={icon} className="w-6 h-6 mr-2 " />
          <ul className="flex flex-col">
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </ContactLink>
    </>
  );
}
