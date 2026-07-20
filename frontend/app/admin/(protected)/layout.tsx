"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  Mail,
  Briefcase,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const NAV = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Messages", href: "/admin/contacts", icon: Mail },
  { label: "Applications", href: "/admin/careers", icon: Briefcase },
];

function Shell({ children }: { children: ReactNode }) {
  const { user, loading, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // Second layer of protection: even if middleware's cookie check
  // is somehow bypassed, no page renders without a verified,
  // non-expired token in this tab's session.
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      <aside className="flex w-64 shrink-0 flex-col border-r border-white/10 bg-[#0B1120]">
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-xs font-bold">
            M3
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-none">
              M3 Console
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
              Admin
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-6">
          {NAV.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition ${
                  active
                    ? "border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-4 py-4">
          <div className="mb-3 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
            <div className="min-w-0">
              <p className="truncate text-xs font-medium">{user.email}</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                {user.role ?? "admin"}
              </p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto px-10 py-10">{children}</main>
    </div>
  );
}

export default function ProtectedAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthProvider>
      <Shell>{children}</Shell>
    </AuthProvider>
  );
}
