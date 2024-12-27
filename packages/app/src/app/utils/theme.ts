import { cookies } from "next/headers";

export async function isDarkMode(): Promise<boolean> {
  const cookiesStore = await cookies();
  const themeCookie = cookiesStore.get("theme");

  if (themeCookie) {
    return themeCookie.value === "dark";
  }

  const prefersDark =
    typeof window !== "undefined" &&
    globalThis.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark;
}
