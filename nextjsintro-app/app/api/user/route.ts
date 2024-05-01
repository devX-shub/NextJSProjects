import { NextRequest } from "next/server";

export function GET() {
    return Response.json({
        email : "shubham",
        name : "shubh"
    })
}

export async function POST(req : NextRequest)
{
    const body = await req.json()
    console.log(body);
    return Response.json({
        message : "you are logged on"
    })
    
}