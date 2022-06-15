import { NextRequest, NextResponse } from "next/server";
// Define all pages that require a user to be logged in.
const authenticatedPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (authenticatedPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    // if not logged in, redirect to signin page.
    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
