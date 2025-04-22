"use client";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { ConfettiButton } from "./ui/confetti-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Main Vibes",
      links: [
        { name: "Home Base", href: "#home" },
        { name: "The Drip", href: "#features" },
        { name: "The Tea", href: "#testimonial" },
        { name: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Squad",
      links: [
        { name: "Our Story", href: "#about" },
        { name: "Hot Takes", href: "#blog" },
        { name: "Join The Team", href: "#careers" },
        { name: "Hit Us Up", href: "#contact" },
      ],
    },
    {
      title: "Sauce",
      links: [
        { name: "Docs", href: "#docs" },
        { name: "SOS Center", href: "#help" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5 text-foreground" />,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <FaTwitter className="w-5 h-5 text-sky-400" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <FaDiscord className="w-5 h-5 text-indigo-500" />,
      href: "#",
      label: "Discord",
    },
    {
      icon: <RiFacebookFill className="w-5 h-5 text-blue-600" />,
      href: "#",
      label: "Facebook",
    },
  ];

  return (
    <footer className="w-full md:min-h-screen  border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container mx-auto px-4 py-12 md:px-10">
        <div className="flex flex-col items-start justify-between gap-12 space-y-8 md:flex-row md:space-y-0">
          {/* Logo and Tagline */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">UGD</span>
            </Link>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={`social-${idx}`}
                  href={social.href}
                  aria-label={social.label}
                  className="text-neutral-600 hover:rotate-10 hover:scale-125 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <div
              key={`footer-section-${idx}`}
              className="flex flex-col space-y-4"
            >
              <h3 className="font-semibold text-black dark:text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={`footer-link-${idx}-${linkIdx}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-neutral-200 pt-6 dark:border-neutral-800 md:flex-row">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {currentYear}. All rights reserved.
          </p>
        </div>

        {/* Full Width Text */}
        <div className="flex items-center justify-center h-full w-full overflow-hidden">
          <h1 className="text-[400px] font-extrabold tracking-tighter text-foreground/5">
            U G D
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
