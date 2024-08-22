import React from "react";
import Link from "next/link";
import {
  Github,
  Home,
  Linkedin,
  Notebook,
  Palette,
  Phone,
  User,
} from "lucide-react";
import clsx from "clsx";
const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;

    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <Notebook className="w-full h-auto" strokeWidth={1.5} />;
    // default:
    //   return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

export default function NavButton({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) {
  console.log(icon);
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{
        // position: "absolute",
        transform: `translate(${x}, ${y})`,
      }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center backdrop-blur-[2px] shadow-glass-inset hover:shadow-glass-sm"
        style={{
          background: "#7851a9B3",
          border: "2px solid #FFFFF4",
          padding: "8px",
        }}
        aria-label={label}
        name={label}
      >
        <span
          className="relative w-12 h-12 animate-spin-slow-reverse group-hover:pause group-hover:text-accent"
          style={{ color: "#FFFFF4" }}
        >
          
          {getIcon(icon)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span
          className={
            clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
            labelDirection === "left" ? "right-full left-auto" : "")
          }
          style={{
            background: "#7851a9B3"
          }}
        >
          {label}

        </span>
        </span>
       
      </Link>
    </div>
  );
}
