import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Category } from "@/app/models/category";

export async function POST(request) {
    try {
        const { name, slug, description, metaTitle, metaDescription, metaKeywords } = await request.json();
        if (!name || !slug || !description) {
            return NextResponse.json(
                {
                    status: 400,
                    message: "Missing required fields: name, slug, description.",
                },
                { status: 400 }
            );
        }
        await connectToDatabase();
        const newCategory = new Category({
            name,
            slug,
            description,
            metaTitle: metaTitle || `${name} DSA Questions | Easy, Medium & Hard Practice Problems`,
            metaDescription: metaDescription || `${name} questions to help you master sequences and lists.`,
            metaKeywords: metaKeywords || [`${name} dsa`, `${name} problems`, `${name} interview questions`],
        });
        await newCategory.save();
        return NextResponse.json(
            {
                status: 200,
                message: "Category created successfully!",
                data: newCategory,  // Return the newly created category for confirmation
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error creating category:", error);
        return NextResponse.json(
            {
                status: 500,
                message: "Failed to create category.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}


export async function GET(request){
    try{
        await connectToDatabase();
        const category = await Category.find({});
        return NextResponse.json({
            status: 200,
            message: "Category fetched successfully!",
            data: category,
        });
    }catch(error){
        return NextResponse.json({
            status: 500,
            message: "Failed to get category.",
            error: error.message,
        },
            {
                status: 500
            })
    }
}