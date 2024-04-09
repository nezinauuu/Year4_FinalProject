import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { AnimalKeeperRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    console.log(content);
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: String(content) }],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(completion.choices[0].message);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
