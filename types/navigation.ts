import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export interface NavDropdownItem {
    name: string;
    href: string;
}

export interface NavItem {
    name: string;
    href?: string;
    dropdown?: NavDropdownItem[];
}

export interface SocialLink {
    icon: IconType;
    label: string;
    href: string;
}

export interface ContactInfo {
    icon: LucideIcon;
    value: string[];
}
