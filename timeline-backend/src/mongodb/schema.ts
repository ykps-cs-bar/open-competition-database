import { Schema, model } from "mongoose";

const urlRegex =
    /^(?:(http|https|ftp):\/\/)?((|[\w-]+\.)+[a-z0-9]+)(?:(\/[^/?#]+)*)?(\?[^#]+)?(#.+)?$/i;
const competitionCategories = ["Others"]; // Add more categories here

const nodeSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    url: { type: String, lowercase: true, match: urlRegex },
    timestamp: { type: Date, required: true, default: Date.now },
    duration: Number,
    father: { type: Schema.Types.ObjectId, ref: "events" },
});

const eventSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: [
        { type: String, default: "Others", enum: competitionCategories },
    ],
    primaryNodes: [{ type: Schema.Types.ObjectId, ref: "pnodes" }],
    secondaryNodes: [{ type: Schema.Types.ObjectId, ref: "snodes" }],
});

const SNode = model("SNode", nodeSchema);
const PNode = model("PNode", nodeSchema);
const Event = model("Event", eventSchema);

export { Event, PNode, SNode };
