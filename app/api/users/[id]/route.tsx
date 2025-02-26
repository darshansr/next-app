import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
import { prisma } from "@/prisma/client";

interface Props {
    params: {
        id: string
    }
}

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
         const user = await prisma.user.findUnique(
            {
                where: {
                    id: parseInt(params.id)
                }   
            }
         );
            
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
    return NextResponse.json(user)
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    //validate the request boday
    // if invalid return 400
    // Fetch the user from the database
    // if not found return 404
    // update the user
    // return 200
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }
    if(params.id>10){
        return NextResponse.json({error: "User not found"}, {status: 404});

    }
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }
) {
    // Fetch the user from the database
    // if not found return 404
    // delete the user
    // return 200
    if(params.id>10){
        return NextResponse.json({error: "User not found"}, {status: 404});
    }
    return NextResponse.json({message: "User deleted successfully"}, {status: 200});
}