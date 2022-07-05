import React from "react";
import BrandLink from "../BrandLink";

const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements", "contact"];
  return (
    <footer className="bg-dark text-light  px-4  py-4 flex justify-between">
      <BrandLink classes={"text-yellow"} />
      <div className="flex items-center">
        {links.map((item) => (
          <a href="" className="ml-4" key={item}>
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
