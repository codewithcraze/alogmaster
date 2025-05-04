// app/api/dsa/question/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Question } from "@/app/models/questions";

export async function POST(request) {
    try {
        // Parse the JSON body of the POST request
        const { title, slug, difficulty, category, statement, link, tags, metaTitle, metaDescription, metaKeywords, solution } = await request.json();

        // Validate required fields
        if (!title || !slug || !difficulty || !category || !statement) {
            return NextResponse.json(
                { status: 400, message: "Missing required fields." },
                { status: 400 }
            );
        }
        await connectToDatabase();
        // Create the new question
        const newQuestion = new Question({
            title,
            slug,
            difficulty,
            category,
            statement,
            link,
            tags,
            solution,
            metaTitle: metaTitle || `${title} – DSA Problem with Solution`,
            metaDescription: metaDescription || `Solve the ${title} problem using efficient algorithms.`,
            metaKeywords: metaKeywords || [title, "dsa", "coding problem"],
        });

        // Save to database
        await newQuestion.save();

        return NextResponse.json(
            { status: 200, message: "Question created successfully!", data: newQuestion },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error creating question:", error);
        return NextResponse.json(
            { status: 500, message: "Failed to create question.", error: error.message },
            { status: 500 }
        );
    }
}

export async function GET(){
    try{
        const questions = await Question.find({}, {
            slug: 1,
            statement: 1,
            _id: 0
        });
        if (!questions.length) {
            return NextResponse.json({
                status: 404,
                message: "Question not found",
            })
        }

        return NextResponse.json({
            status: 200,
            data: questions,
        })

    }catch(error){
        return NextResponse.json({
            status: 500,
            message: "Failed to fetch questions.",
            error: error.message
        }, {
            status: 500
        })
    }
}