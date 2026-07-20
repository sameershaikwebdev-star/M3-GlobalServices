import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}
