"use client";

import { Briefcase, Home, Mail, User } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { paths } from "@/core/paths";

const navItems = [
  { name: "Home", url: paths.home.getHref(), icon: Home },
  { name: "Works", url: paths.works.getHref(), icon: Briefcase },
  { name: "About", url: paths.about.getHref(), icon: User },
  { name: "Contact", url: paths.contact.getHref(), icon: Mail },
];

export const Navigation = () => {
  return <NavBar items={navItems} />;
};
