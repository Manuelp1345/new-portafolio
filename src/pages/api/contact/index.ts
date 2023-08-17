import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;
  let response;
  try {
    response = await axios.post("https://api-nest-i8iq.onrender.com/contact", {
      name,
      email,
      message,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
  return res.send(response.data);
}
