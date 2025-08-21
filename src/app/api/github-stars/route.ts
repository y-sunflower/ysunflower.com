import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user = searchParams.get("user");
  const repo = searchParams.get("repo");
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // from .env.local

  if (!user || !repo) {
    return NextResponse.json(
      { error: "Missing user or repo" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub repo" },
      { status: 500 }
    );
  }
}
