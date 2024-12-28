"use server";

import { NextResponse } from "next/server";

interface LoginFormData {
  userCode: string | undefined;
}

export async function login(formData: FormData) {
  const userCode = formData.get("userCode") as LoginFormData["userCode"];
  if (!userCode) {
    throw new Error("User Code is required");
  }

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userCode }),
    });

    if (response.status === 200) {
      const data = await response.json();
      const guid = data.guid;

      const res = NextResponse.redirect("/dashboard");
      res.cookies.set("user", guid, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Failed to login. Please try again.");
  }
}
