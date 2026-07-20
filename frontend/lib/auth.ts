/**
 * Session helpers for the admin console.
 *
 * Design notes:
 * - The JWT itself lives in sessionStorage (not localStorage). It disappears
 *   when the tab closes, which limits how long a stolen token stays useful
 *   if this app were ever compromised by an XSS bug. It is NOT sent to the
 *   server automatically (unlike a cookie), so it is immune to CSRF.
 * - A second, non-sensitive cookie (`m3_admin_authed`) is set purely as a
 *   flag so the Next.js middleware can do a cheap "are we logged in at all"
 *   check on the server before a protected page even renders. It carries no
 *   identity or permission data — the real authorization check happens on
 *   the backend via the Bearer token on every API call.
 * - Strongest option long-term: have the Spring backend set the JWT as an
 *   httpOnly, Secure, SameSite=strict cookie itself. That removes the token
 *   from JS entirely. This file is written so swapping to that model later
 *   only touches `setSession` / `getToken` / the axios interceptor.
 */

const TOKEN_KEY = "m3_admin_token";
const AUTH_FLAG_COOKIE = "m3_admin_authed";

export interface JwtPayload {
  sub?: string;
  email?: string;
  role?: string;
  exp: number;
  iat?: number;
}

function decodeToken(token: string): JwtPayload | null {
  try {
    const payload = token.split(".")[1];
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(normalized)
        .split("")
        .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
        .join("")
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function setSession(token: string) {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(TOKEN_KEY, token);

  const payload = decodeToken(token);
  const nowSec = Math.floor(Date.now() / 1000);
  const maxAge = payload?.exp ? Math.max(payload.exp - nowSec, 0) : 60 * 60;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${AUTH_FLAG_COOKIE}=1; path=/; max-age=${maxAge}; samesite=strict${secure}`;
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(TOKEN_KEY);
}

export function clearSession() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(TOKEN_KEY);
  document.cookie = `${AUTH_FLAG_COOKIE}=; max-age=0`;
}

export function isTokenValid(token: string | null): boolean {
  if (!token) return false;
  const payload = decodeToken(token);
  if (!payload?.exp) return false;
  // 5s clock-skew buffer
  return payload.exp * 1000 > Date.now() + 5000;
}

export function getCurrentUser(): { email?: string; role?: string } | null {
  const token = getToken();
  if (!isTokenValid(token)) return null;
  const payload = decodeToken(token as string);
  if (!payload) return null;
  return { email: payload.email, role: payload.role };
}