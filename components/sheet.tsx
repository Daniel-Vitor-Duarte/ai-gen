import * as React from "react"
import { cn } from "@/lib/utils"
import * as DialogPrimitive from "@radix-ui/react-dialog"

const Sheet = DialogPrimitive.Root

const SheetTrigger = DialogPrimitive.Trigger

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    side?: "top" | "bottom" | "left" | "right"
  }
>(({ className, children, side = "right", ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-background p-6 shadow-lg transition-all duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-0 data-[state=open]:slide-in-from-left-0 data-[state=closed]:slide-out-to-right-0 data-[state=open]:slide-in-from-right-0 data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-top-0 data-[state=closed]:slide-out-to-bottom-0 data-[state=open]:slide-in-from-bottom-0",
        side === "top" &&
          "border-b border-border data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-top-0",
        side === "bottom" &&
          "border-t border-border data-[state=closed]:slide-out-to-bottom-0 data-[state=open]:slide-in-from-bottom-0",
        side === "left" &&
          "border-r border-border data-[state=closed]:slide-out-to-left-0 data-[state=open]:slide-in-from-left-0",
        side === "right" &&
          "border-l border-border data-[state=closed]:slide-out-to-right-0 data-[state=open]:slide-in-from-right-0",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"></DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName

export { Sheet, SheetTrigger, SheetContent }

