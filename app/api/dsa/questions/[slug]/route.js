// app/api/dsa/question/[slug]/route.js

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Question } from "@/app/models/questions";  // Import Question model
import { Category } from "@/app/models/category";  // Import Category model

export async function GET(request, { params }) {
    try {
        const { slug } = params;
        await connectToDatabase();
        const question = await Question.findOne({ slug })
            .populate('category');
        if (!question) {
            return NextResponse.json(
                { status: 404, message: `Question with slug '${slug}' not found.` },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { status: 200, data: question },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching question:", error);
        return NextResponse.json(
            { status: 500, message: "Failed to fetch question.", error: error.message },
            { status: 500 }
        );
    }
}

export async function PATCH(request, { params }) {
    try {
        const { slug } = params;
        const updates = await request.json();

        await connectToDatabase();

        // Find and update the question by slug
        const updatedQuestion = await Question.findOneAndUpdate(
            { slug },
            updates,
            { new: true } // Return the updated document
        );

        if (!updatedQuestion) {
            return NextResponse.json(
                { status: 404, message: `Question with slug '${slug}' not found.` },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { status: 200, message: "Question updated successfully!", data: updatedQuestion },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating question:", error);
        return NextResponse.json(
            { status: 500, message: "Failed to update question.", error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const { slug } = params;

        await connectToDatabase();

        // Find and delete the question by slug
        const deletedQuestion = await Question.findOneAndDelete({ slug });

        if (!deletedQuestion) {
            return NextResponse.json(
                { status: 404, message: `Question with slug '${slug}' not found.` },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { status: 200, message: "Question deleted successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting question:", error);
        return NextResponse.json(
            { status: 500, message: "Failed to delete question.", error: error.message },
            { status: 500 }
        );
    }
}

