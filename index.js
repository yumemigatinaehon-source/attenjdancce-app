import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h1>出席確認ページ</h1>
    <form method="POST" action="/checkin">
      <input type="text" name="name" placeholder="名前を入力" required>
      <button type="submit">出席</button>
    </form>
  `);
});

app.post("/checkin", (req, res) => {
  const name = req.body.name;
  const now = new Date().toLocaleString("ja-JP");
  console.log(`出席確認: ${name} (${now})`);
  res.send(`<h1>${name}さんの出席を確認しました！</h1><p>${now}</p>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
