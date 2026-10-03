'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    _hmt?: unknown[][];
  }
}

// hm.js only counts the landing page; report client-side navigations as page views.
export function BaiduTongjiPageview() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window._hmt = window._hmt || [];
    window._hmt.push(['_trackPageview', pathname]);
  }, [pathname]);

  return null;
}
