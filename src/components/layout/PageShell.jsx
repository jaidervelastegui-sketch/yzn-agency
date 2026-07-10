"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";

export default function PageShell({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {children}
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
    </>
  );
}
