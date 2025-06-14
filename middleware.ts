import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("admin_auth")?.value === "true";
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/admin") && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
// This middleware checks if the user is logged in by looking for the "admin_auth" cookie.
// If the user is not logged in and tries to access any admin page, they are redirected to the login page.