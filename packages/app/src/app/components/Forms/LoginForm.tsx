"use client";

import { useActionState } from "react";
import Form from "next/form";
import Button from "../UI/Button";
import { loginAction, LoginState } from "@/app/auth/actions";

const initialState: LoginState = {
  success: false,
  error: undefined,
  response: undefined,
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <Form action={formAction} className="flex flex-col gap-2.5">
      <label htmlFor="userCode">קוד:</label>
      <input
        id="userCode"
        name="userCode"
        className="border border-solid border-foreground dark:border-foregroundDark"
      />
      <Button variant="success" type="submit" disabled={pending}>
        התחברות
      </Button>
      {state.error && <p className="text-red-500">{state.error}</p>}
    </Form>
  );
}
