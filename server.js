// // server.js
// import express from "express";
// const app = express();
// const port = process.env.PORT || 3000;
// let attendanceList = [];

// // JSONデータ送信対応
// app.use(express.json());

// // 出席フォーム（仮）
// app.get("/", (req, res) => {
//   res.send("<h1>出席確認サイトへようこそ！</h1><p>フォームはこれから作るよ。</p>");
// });

// // Renderが使うポートで待機
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // 出席情報保存
// app.post("/attend", (req, res) => {
//   const { name } = req.body;
//   if (!name) return res.status(400).send("お名前を入力してください");

//   attendanceList.push({ name, time: new Date() });
//   res.send(`出席登録完了: ${name}`);
// });

// app.get("/list", (req, res) => {
//   res.json(attendanceList);
// });

//------------------------------------------------
//test2
import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
const DATA_FILE = path.join(__dirname, "data.json");

app.use(express.static("public"));
app.use(express.json());

// 出席記録保存API
app.post("/api/record", (req, res) => {
  const { room, action, time } = req.body;
  const data = fs.existsSync(DATA_FILE) ? JSON.parse(fs.readFileSync(DATA_FILE)) : [];
  data.push({ room, action, time });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ message: "記録しました" });
});

// 出席データ取得API
app.get("/api/records", (req, res) => {
  const data = fs.existsSync(DATA_FILE) ? JSON.parse(fs.readFileSync(DATA_FILE)) : [];
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
