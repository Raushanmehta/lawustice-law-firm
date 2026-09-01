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

export interface ContactInfo {
    icon: LucideIcon;
    value: string[];
}
