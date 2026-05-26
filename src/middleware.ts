import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Locale is read from NEXT_LOCALE cookie in i18n.ts — no routing logic needed here
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}
