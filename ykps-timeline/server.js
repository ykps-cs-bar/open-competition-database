const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const { PNode } = require("./timeline-models.js");

const app = express();
const port = 3000;

// 连接 MongoDB
connect("mongodb://localhost:27017/timeline")
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());

// 解析 JSON 请求体
// app.use(express.json());

// 路由
// app.get("/timeline", async (req, res) => {
//     try {
//         const timelineEntries = await timelineModels.TimelineEntry.find().sort({})
//     } catch (err) {
//         console.error(err);
//     }
// });

app.get("/api/data", (req, res) => {
    const lastDataId = req.query.lastDataId; // 获取最后加载的数据 ID

    // 查询数据
    PNode.find({ _id: { $gt: lastDataId } }) // 替换为您的查询条件
        .sort({ timestamp: 1 }) // 按 timestamp 升序排序
        .limit(5) // 限制每次加载的数据数量
        .then((data) => {
            // 返回数据，按 timestamp 排序
            data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); // 按 timestamp 排序

            // 返回数据
            res.json({
                data,
                lastDataId: data[data.length - 1]._id,
            });
        })
        .catch((err) => {
            console.error("查询数据失败:", err);
            res.status(500).send("查询数据失败");
        });
});

app.get("load-timeline.js", (req, res) => {
    res.sendFile("./public/load-timeline.js");
});

app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
