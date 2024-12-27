"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import React from "react";

export default function DirectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DirectionProvider dir="rtl">{children}</DirectionProvider>;
}
