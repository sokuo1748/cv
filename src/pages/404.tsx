import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    window.location.replace(process.env.NEXT_PUBLIC_BASE_PATH || "/cv");
  }, []);

  return null;
}
