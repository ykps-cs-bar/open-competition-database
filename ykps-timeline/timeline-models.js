const mongoose = require("mongoose");
const urlRegex =
    /^(?:(http|https|ftp):\/\/)?((|[\w-]+\.)+[a-z0-9]+)(?:(\/[^/?#]+)*)?(\?[^#]+)?(#.+)?$/i;
const competitionCategories = ["Others"];

const nodeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    url: { type: String, lowercase: true, match: urlRegex },
    timestamp: { type: Date, required: true, default: Date.now },
    duration: Number,
    father: { type: mongoose.Schema.Types.ObjectId, ref: "events" },
});

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: [
        { type: String, default: "Others", enum: competitionCategories },
    ],
    primaryNodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "pnodes" }],
    secondaryNodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "snodes" }],
});

const SNode = mongoose.model("SNode", nodeSchema);
const PNode = mongoose.model("PNode", nodeSchema);
const Event = mongoose.model("Event", eventSchema);

module.exports = { Event, PNode, SNode };
