// models/Category.js

import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },        // e.g. "Array"
    slug: { type: String, required: true, unique: true },        // e.g. "array"
    description: { type: String },                               // Page body or info
    type: { type: String, enum: ['dsa', 'miscellaneous'], required: true }, // e.g. "dsa" or "miscellaneous"
    // 👇 SEO fields
    metaTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: [{ type: String }],

}, { timestamps: true });

export const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);
