"use server";

import { NextResponse } from "next/server";

export type LoginState = {
  success: boolean;
  error: string | undefined;
  response?: NextResponse<unknown> | undefined;
};

interface LoginFormData {
  userCode: string | undefined;
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  console.log(prevState);
  const userCode = formData.get("userCode") as LoginFormData["userCode"];
  if (!userCode) {
    return { success: false, error: "יש להכניס קוד", response: undefined };
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
      return { success: true, error: undefined, response: res };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || "התחברות נכשלה",
        response: undefined,
      };
    }
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, error: "התחברות נכשלה", response: undefined };
  }
}
