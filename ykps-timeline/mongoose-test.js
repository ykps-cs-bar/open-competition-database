import { connect, disconnect } from "mongoose";
import { Event, PNode, SNode } from "./timeline-models"; // Assuming your models are in a file named 'models.js'

const mongodbURL = "mongodb://127.0.0.1:27017/competition-timeline";

async function seedDatabase() {
    try {
        // Connect to the database
        await connect(mongodbURL, {
            useUnifiedTopology: true,
        });

        // Create an event
        const event = new Event({
            title: "Coding Challenge",
            description: "A coding challenge for students.",
            category: ["Others"],
        });

        // Create a primary node
        const pNode = new PNode({
            title: "Registration",
            description: "Open for registration",
            url: "https://www.example.com/register",
            duration: 24 * 60 * 60, // Duration in seconds (24 hours)
        });

        // Create two secondary nodes
        const sNode1 = new SNode({
            title: "Problem Statement Release",
            description: "The problem statement is released.",
            url: "https://www.example.com/problem",
            duration: 12 * 60 * 60, // Duration in seconds (12 hours)
        });

        const sNode2 = new SNode({
            title: "Submission Deadline",
            description: "Submissions close.",
            url: "https://www.example.com/submit",
            duration: 24 * 60 * 60, // Duration in seconds (24 hours)
        });

        // Associate nodes with the event
        event.primaryNodes.push(pNode._id);
        event.secondaryNodes.push(sNode1._id);
        event.secondaryNodes.push(sNode2._id);

        // Save the event, primary node, and secondary nodes
        await event.save();
        await pNode.save();
        await sNode1.save();
        await sNode2.save();

        console.log("Database seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    } finally {
        // Disconnect from the database
        await disconnect();
    }
}

seedDatabase();
