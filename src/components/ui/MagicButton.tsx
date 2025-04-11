import { cn } from "@/lib/utils";

type MagicButtonLinkProps = {
  title: string;
  href: string;
  otherClasses?: string;
  variant: "default" | "outline";
};

export const MagicButtonLink = (props: MagicButtonLinkProps) => {
  return (
    <a className={cn(
      "relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border-2 border-[#4169E1]",
      props.otherClasses
    )} href={props.href}>
      <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] ${props.variant === "outline" && "hidden"} `} />
      <span className={`px-6 py-3 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${props.variant === "default" && "bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080]"} lg:text-2xl md:font-bold text-white backdrop-blur-3xl ${props.variant === "outline" && "bg-transparent"}`}>
        {props.title}
      </span>
    </a>
  );
};
