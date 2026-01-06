"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  discount?: boolean
}

export const Tab: React.FC<TabProps> = ({
  text,
  selected,
  setSelected,
  discount = false,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      aria-pressed={selected}
      type="button"
      className={cn(
        "relative w-fit px-4 py-2 text-sm font-semibold capitalize",
        "text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full",
        discount && "flex items-center justify-center gap-2.5"
      )}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-background shadow-sm"
        />
      )}
      {discount && (
        <Badge
          variant="secondary"
          className={cn(
            "relative z-10 whitespace-nowrap shadow-none",
            selected && "bg-muted"
          )}
        >
          Save 35%
        </Badge>
      )}
    </button>
  )
}