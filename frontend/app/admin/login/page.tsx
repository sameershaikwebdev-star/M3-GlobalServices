

"use client";

import { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ShieldCheck, Lock, Mail, Loader2, AlertTriangle } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const expired = params.get("expired") === "1";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn({ email: email.trim(), password });
      const redirect = params.get("redirect") || "/admin/dashboard";
      router.push(redirect);
    } catch {
      // Deliberately generic — never reveal whether the email exists.
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[110px]"
      />

      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold tracking-tight text-white shadow-[0_0_30px_rgba(6,182,212,0.35)]">
            M3
          </div>
          <h1 className="text-xl font-semibold text-white">Admin Console</h1>
          <p className="mt-1 text-sm text-slate-500">
            Sign in to manage messages and applications
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl"
          noValidate
        >
          {expired && (
            <p className="mb-4 flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              Your session expired. Please sign in again.
            </p>
          )}
          {error && (
            <p
              role="alert"
              className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-300"
            >
              {error}
            </p>
          )}

          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium text-slate-400"
          >
            Email
          </label>
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 transition focus-within:border-cyan-500/50">
            <Mail className="h-4 w-4 shrink-0 text-slate-500" />
            <input
              id="email"
              type="email"
              required
              autoComplete="username"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              placeholder="you@m3globalservices.com"
            />
          </div>

          <label
            htmlFor="password"
            className="mb-1.5 block text-xs font-medium text-slate-400"
          >
            Password
          </label>
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 transition focus-within:border-cyan-500/50">
            <Lock className="h-4 w-4 shrink-0 text-slate-500" />
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ShieldCheck className="h-4 w-4" />
            )}
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] tracking-wide text-slate-600">
          Restricted access · Activity is logged
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthProvider>
  );
}
