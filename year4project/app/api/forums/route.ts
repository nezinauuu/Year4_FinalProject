import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { AnimalKeeperRole } from "@prisma/client";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const { name, description } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const Pet = await db.forum.create({
      data: {
        title: name,
        content: description,
        creatorId: profile.id,
      },
    });

    return NextResponse.json(Pet);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
