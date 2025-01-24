import { cn } from "@/app/utils/cn";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "success" | "info" | "delete";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "info",
  size = "medium",
  onClick,
  disabled = false,
  children,
}: ButtonProps) => {
  const baseClasses = "text-center rounded font-medium";

  const variantClasses = {
    success:
      "bg-emerald-500 dark:bg-emerald-800 hover:bg-emerald-600 dark:hover:bg-emerald-900",
    info: "bg-blue-500 hover:bg-blue-600",
    delete: "bg-red-500 hover:bg-red-600",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
