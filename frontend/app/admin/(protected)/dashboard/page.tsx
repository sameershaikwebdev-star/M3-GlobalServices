"use client";

import { useEffect, useState } from "react";
import api from "@/services/axios";
import { Mail, Briefcase, Clock, CheckCircle2 } from "lucide-react";

interface DashboardStats {
  totalContacts: number;
  unreadContacts: number;
  totalApplications: number;
  pendingApplications: number;
}

const CARDS: {
  key: keyof DashboardStats;
  label: string;
  icon: typeof Mail;
  iconWrap: string;
  iconColor: string;
}[] = [
  {
    key: "totalContacts",
    label: "Total messages",
    icon: Mail,
    iconWrap: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    key: "unreadContacts",
    label: "Unread messages",
    icon: Clock,
    iconWrap: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    key: "totalApplications",
    label: "Total applications",
    icon: Briefcase,
    iconWrap: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    key: "pendingApplications",
    label: "Pending review",
    icon: CheckCircle2,
    iconWrap: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<DashboardStats>("/api/admin/dashboard")
      .then((res) => setStats(res.data))
      .catch(() => setError("Could not load dashboard statistics."));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Overview</h1>
      <p className="mt-1 text-sm text-slate-500">
        Live snapshot of messages and applications.
      </p>

      {error && (
        <p className="mt-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((card) => {
          const Icon = card.icon;
          const value = stats ? stats[card.key] : undefined;
          return (
            <div
              key={card.key}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${card.iconWrap}`}
              >
                <Icon className={`h-5 w-5 ${card.iconColor}`} />
              </div>
              <p className="text-3xl font-semibold tabular-nums text-white">
                {value ?? (error ? "—" : "···")}
              </p>
              <p className="mt-1 text-sm text-slate-500">{card.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
