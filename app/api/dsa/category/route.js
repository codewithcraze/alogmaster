import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Category } from "@/app/models/category";
import { Question } from "@/app/models/questions";


export async function POST(request) {
    try {
        const { name, slug, description, metaTitle, metaDescription, metaKeywords, type } = await request.json();
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
            type: type || "miscellaneous",
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


export async function GET(request) {
    try {
        await connectToDatabase();
        const result = await Category.aggregate([
            {
                $lookup: {
                    from: "questions", // 👈 yeh 'Question' model ka collection name (plural and lowercase)
                    localField: "_id",
                    foreignField: "category",
                    as: "questions"
                }
            },
            {
                $addFields: {
                    easy: {
                        $size: {
                            $filter: {
                                input: "$questions",
                                as: "q",
                                cond: { $eq: ["$$q.difficulty", "easy"] }
                            }
                        }
                    },
                    medium: {
                        $size: {
                            $filter: {
                                input: "$questions",
                                as: "q",
                                cond: { $eq: ["$$q.difficulty", "medium"] }
                            }
                        }
                    },
                    hard: {
                        $size: {
                            $filter: {
                                input: "$questions",
                                as: "q",
                                cond: { $eq: ["$$q.difficulty", "hard"] }
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    categoryId: "$_id",
                    name: 1,
                    slug: 1,
                    description: 1,
                    metaTitle: 1,
                    metaDescription: 1,
                    metaKeywords: 1,
                    easy: 1,
                    medium: 1,
                    type: 1,
                    hard: 1
                }
            }
        ]);
        return NextResponse.json({
            status: 200,
            message: "Category fetched successfully!",
            data: result,
        });
    } catch (error) {
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