import express from "express";
import cors from "cors";
import path from "path";

const app = express();

// 允许跨域资源共享
app.use(cors());
// app.use(cors({
//   origin: "https://example.com"
// }));

// 解析JSON请求体
app.use(express.json());

// 提供静态文件服务
app.use(express.static(path.join(__dirname, "../../timeline-frontend/public")));

// API路由
app.get("/api/data", (req, res) => {
    // 处理API请求
    res.json({ message: "Hello from Express!" });
});

// 处理所有其他请求，返回前端应用
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../timeline-frontend/public/index.html")
    );
});

export default app;
