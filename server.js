// server.js
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// JSONデータ送信対応
app.use(express.json());

// 出席フォーム（仮）
app.get("/", (req, res) => {
  res.send("<h1>出席確認サイトへようこそ！</h1><p>フォームはこれから作るよ。</p>");
});

// Renderが使うポートで待機
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
