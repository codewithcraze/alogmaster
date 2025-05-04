import { NextResponse} from "next/server";
import { connectToDatabase} from "@/app/lib/mongodb";

export async function GET(){

    await connectToDatabase();

    return NextResponse.json({
        status: 200,
        message: "Whoops!"
    })
}