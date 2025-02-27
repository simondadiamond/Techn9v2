import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full",
          {
            "bg-[#40E0D0] text-black hover:bg-[#3CC8B9]": variant === "default",
            "border border-[#40E0D0] text-[#40E0D0] hover:bg-[#40E0D0] hover:text-black": variant === "outline",
            "hover:bg-[#40E0D0]/10 text-[#40E0D0]": variant === "ghost",
            "h-9 px-4 py-2": size === "default",
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-6": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
