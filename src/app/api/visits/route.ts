import { NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";

const KEY = "portfolio:visits";

export async function POST() {
  try {
    const redis = await getRedis();
    const count = await redis.incr(KEY);
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}

export async function GET() {
  try {
    const redis = await getRedis();
    const raw = await redis.get(KEY);
    const count = raw ? parseInt(raw, 10) : 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
