import React, { ReactNode, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";

interface CustomPopoverProps {
  triggerContent: ReactNode;
  children: ReactNode;
  sideOffset?: number;
  closeButton?: boolean;
}

export const CustomPopover = ({
  triggerContent,
  children,
  sideOffset = 5,
  closeButton = true,
}: CustomPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root onOpenChange={(open) => setIsOpen(open)}>
      <Popover.Trigger asChild>
        <button
          className={`p-2 rounded font-semibold decoration-4 group inline-flex items-center justify-center outline-none ${
            isOpen
              ? "text-emerald-700 dark:text-emerald-900"
              : "hover:text-emerald-700 dark:hover:text-emerald-900"
          }`}
        >
          {triggerContent}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-[100] w-[260px] rounded bg-background dark:bg-backgroundDark border border-gray-300 p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.mint-500)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={sideOffset}
        >
          {children}
          {closeButton && (
            <Popover.Close
              className="absolute left-[5px] top-[5px] inline-flex size-[25px] cursor-default items-center justify-center rounded-full hover:text-emerald-700 dark:hover:text-emerald-900"
              aria-label="Close"
            >
              <Cross2Icon />
            </Popover.Close>
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
