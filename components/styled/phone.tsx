import { Icon } from "@iconify/react";
import ContactLink from "./contact-link";

type ContactInfo = {
  href: string;
  icon: string;
  name: string;
};

export default function Phone({ contact }: { contact: ContactInfo[] }) {
  return (
    <div>
      <ul className="space-y-3">
        {contact.map((item, index) => (
          <li key={index} className="group">
            <ContactLink href={item.href} className="flex text-blue-950 group-hover:text-blue-900 " title={item.name}>
              <Icon icon={item.icon} className="text-blue-950 group-hover:text-blue-900  w-6 h-6 mr-2 my-auto" />
              {item.name}
            </ContactLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
