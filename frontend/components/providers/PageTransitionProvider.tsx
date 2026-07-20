"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type TransitionContextType = {
  loading: boolean;
  startTransition: () => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function PageTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // When a new page finishes loading, hide the loader
    setLoading(false);
  }, [pathname]);

  return (
    <TransitionContext.Provider
      value={{
        loading,
        startTransition: () => setLoading(true),
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext);

  if (!ctx) {
    throw new Error(
      "usePageTransition must be inside PageTransitionProvider"
    );
  }

  return ctx;
}