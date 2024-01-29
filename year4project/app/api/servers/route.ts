import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { AnimalKeeperRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const { name, breed, description } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const Pet = await db.pet.create({
      data: {
        profileId: profile.id,
        name,
        description,
        breed,
        imageUrl: "",
        inviteCode: uuidv4(),

        animalKeepers: {
          create: [
            {
              profileId: profile.id,
              role: AnimalKeeperRole.GUEST,
            },
          ],
        },
      },
    });

    return NextResponse.json(Pet);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
