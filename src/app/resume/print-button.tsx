"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(buttonVariants({ size: "sm" }), "gap-2")}
    >
      <Download className="size-3.5" />
      Download / Print PDF
    </button>
  );
}
