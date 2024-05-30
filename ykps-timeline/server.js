const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const timelineModels = require("./timeline-models");
const app = express();
const port = 3000;

// 连接 MongoDB
mongoose
    .connect("mongodb://localhost:27017/timeline", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// 允许跨域请求
app.use(cors());
app.use(express.json()); // 解析 JSON 请求体

// 路由
app.get("/timeline", async (req, res) => {});
app.post("/timeline", async (req, res) => {});

// 启动服务器
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
