// GET -- geting data
// POST -- sending data
// PUT -- updating data
// DELETE -- deleting data


import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
    const allUsers= await prisma.user.findMany();
    return NextResponse.json(allUsers);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400});
    }
    return NextResponse.json({id: 3, name: body.name}, {status: 201});
}

