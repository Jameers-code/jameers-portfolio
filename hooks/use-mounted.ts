import { useEffect, useState } from "react";

/** Returns true after the component has mounted on the client. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  // Canonical hydration-guard pattern; the one-time flip is intentional.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  return mounted;
}
