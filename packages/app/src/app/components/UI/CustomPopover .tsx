import React, { ReactNode } from "react";
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
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="p-2 rounded font-semibold decoration-4 group inline-flex items-center justify-center outline-none hover:text-emerald-700 dark:hover:text-emerald-900">
          {triggerContent}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-[260px] rounded bg-background dark:bg-backgroundDark p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.emerald-500)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={sideOffset}
        >
          <div className="flex flex-col gap-2.5">{children}</div>
          {closeButton && (
            <Popover.Close
              className="absolute left-[5px] top-[5px] inline-flex size-[25px] cursor-default items-center justify-center rounded-full outline-none hover:bg-emerald-200"
              aria-label="Close"
            >
              <Cross2Icon />
            </Popover.Close>
          )}
          <Popover.Arrow className="fill-background dark:fill-backgroundDark" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
