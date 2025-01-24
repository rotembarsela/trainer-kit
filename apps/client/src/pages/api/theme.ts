import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { theme } = req.body;

    if (!["dark", "light"].includes(theme)) {
      return res.status(400).json({
        message: "Invalid theme value",
        error: "Theme must be 'dark' or 'light'",
      });
    }

    res.setHeader(
      "Set-Cookie",
      `theme=${theme}; Path=/; HttpOnly; Max-Age=31536000; SameSite=Strict`
    );

    return res.status(200).json({ message: `Theme set to ${theme}` });
  } else {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .json({ message: "Method Not Allowed", error: "Only POST is supported" });
  }
}
