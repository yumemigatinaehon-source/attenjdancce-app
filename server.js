// server.js
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
let attendanceList = [];

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

// 出席情報保存
app.post("/attend", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send("お名前を入力してください");

  attendanceList.push({ name, time: new Date() });
  res.send(`出席登録完了: ${name}`);
});

app.get("/list", (req, res) => {
  res.json(attendanceList);
});
