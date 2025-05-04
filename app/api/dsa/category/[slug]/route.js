import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";
import { Category } from "@/app/models/category";

export async function PATCH(request, { params }) {
    try {
        await connectToDatabase();

        const { slug } = params;
        const updates = await request.json();

        // Find the category by slug and update with new values
        const updatedCategory = await Category.findOneAndUpdate(
            { slug },
            updates,
            { new: true } // Return the updated document
        );

        if (!updatedCategory) {
            return NextResponse.json(
                {
                    status: 404,
                    message: `Category with slug '${slug}' not found.`,
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                status: 200,
                message: "Category updated successfully.",
                data: updatedCategory,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating category:", error);
        return NextResponse.json(
            {
                status: 500,
                message: "Failed to update category.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}


export async function DELETE(request, {params}){
    try{
        await connectToDatabase();
        const { slug } = params;
        const del = await Category.findOneAndDelete({ slug });
        if (!del) {
            return NextResponse.json({
                status: 404,
                message: `Category with slug '${slug}' not found.`,
            }, {
                status: 404
            })
        }

        return NextResponse.json({
            status: 200,
            message: "Category deleted successfully.",

        }, {
            status: 200
        })

    }catch(error){
        console.error("Error deleting category:", error);
        return NextResponse.json({
            status: 500,
            message: "Failed to delete category.",
            error: error.message,
        },{
            status: 500
        })
    }
}