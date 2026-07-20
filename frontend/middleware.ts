import { NextRequest, NextResponse } from "next/server";

const PUBLIC = ["/admin/login"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PUBLIC.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get("m3_admin_authed")?.value;

  if (cookie !== "1") {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("redirect", pathname);

    const response = NextResponse.redirect(url);

    response.cookies.delete("m3_admin_authed");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};