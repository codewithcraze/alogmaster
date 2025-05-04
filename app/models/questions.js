// models/Question.js

import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    title: { type: String, required: true },                     // "Two Sum"
    slug: { type: String, required: true, unique: true },        // "two-sum"
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },

    statement: { type: String, required: true },                 // Full question text
    link: { type: String },                                      // Optional: Leetcode/GeeksforGeeks link
    tags: [{ type: String }],                                    // e.g. ["two-pointer", "hashmap"]

    solution: {
        type: String
    },

    // 👇 SEO fields
    metaTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: [{ type: String }],
}, { timestamps: true });

export const Question = mongoose.models.Question || mongoose.model('Question', QuestionSchema);
