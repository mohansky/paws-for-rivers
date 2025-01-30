import { Icon } from "@iconify/react";
import { socials } from "@/data/social";
import ContactLink from "./contact-link";

export default function SocialLinks() {
  return (
    <div>
      <ul className="flex space-x-5">
        {socials.map((item, index) => (
          <li key={index}>
            <ContactLink href={item.link} title={item.name}>
              <Icon
                icon={item.icon}
                className="text-blue-950 hover:text-blue-900 w-10 h-10"
              />
            </ContactLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
