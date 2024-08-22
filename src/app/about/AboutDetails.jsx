import clsx from "clsx";
import React from "react";

const ItemDetails = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-between w-full rounded-lg p-12 backdrop-blur-[12px] shadow-glass-inset hover:shadow-glass-sm custom-bg"
      )}
    >
      {children}
    </div>
  );
};

export default function AboutDetails() {
  return (
    <section className="py-20 w-full" style={{}}>
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemDetails
          className={"col-span-8 row-span-2 flex-col items-start space-y-8"}
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in software development is powered with an array of
            mystical technologies, from the more common of Javascript
            frameworks, to the more rare and powerful, such as Flutter and
            Shaders. I craft seamless portals (websites and apps) that connect
            people to realms (companies) across the metaverse. My design skills
            ensure every creation is not only functional but visually
            captivating. Join me as I continue to explore new spells and
            technologies to shape the future of the web.
          </p>
        </ItemDetails>

        <ItemDetails className={"col-span-4"}>
          <p className="font-semibold text-left text-5xl">
            10+<sub className="font-semibold text-sm">Clients</sub>
          </p>
        </ItemDetails>
        <ItemDetails className={"col-span-4"}>
          <p className="font-semibold text-left text-5xl">
            10+<sub className="font-semibold text-sm">Years of Experience</sub>
          </p>
        </ItemDetails>
        <ItemDetails className={"col-span-4 row-span-2 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://readme-stats-five-nu.vercel.app/api/top-langs/?username=tarrenhassman&layout=donut&theme=transparent&hide_border=true&type=svg&background=7851a9b3&text_color=fffff4&title_color=fffff4&langs_count=8"
            alt="Github Language Stats"
            loading="Loading"
          ></img>
        </ItemDetails>

        <ItemDetails className={"col-span-8 row-span-2 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,wasm,ae,apple,androidstudio,angular,aws,babel,bash,blender,bun,c,cs,cpp,dart,docker,figma,firebase,flutter,flask,git,github,go,gradle,ipfs,java,kotlin,matlab,mongodb,mysql,nextjs,nodejs,postgres,powershell,py,react,r,regex,redis,rust,sqlite,solidity,tailwind,ts,unity,unreal,vim,vscode,vue,webpack,xd"
            alt="Github Language Stats"
            loading="Loading"
          ></img>
        </ItemDetails>
      </div>
    </section>
  );
}
