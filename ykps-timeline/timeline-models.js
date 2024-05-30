const mongoose = require("mongoose");

const timelineNodeSchema = new mongoose.Schema({
    title: { String, required: true },
    description: { String, required: true },
    time: { Date, required: true },
    duration: Number,
});

const timelineSchema = new mongoose.Schema({
    title: { String, required: true },
    description: { String, required: true },
    ordinaryNodes: [TimelineNode],
    primaryNodes: [TimelineNode],
});

const TimelineNode = mongoose.model("TimelineNode", timelineNodeSchema);
const Timeline = mongoose.model("Timeline", timelineSchema);

module.exports = { Timeline, TimelineNode };
