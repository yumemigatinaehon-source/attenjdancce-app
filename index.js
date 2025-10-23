// import express from "express";
// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send(`
//     <h1>出席確認ページ</h1>
//     <form method="POST" action="/checkin">
//       <input type="text" name="name" placeholder="出席番号を入力" required>
//       <button type="submit">出席確認「</button>
//     </form>
//   `);
// });

// app.post("/checkin", (req, res) => {
//   const name = req.body.name;
//   const now = new Date().toLocaleString("ja-JP");
//   console.log(`出席確認: ${name} (${now})`);
//   res.send(`<h1>${name}さんの出席を確認しました！</h1><p>${now}</p>`);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`✅ Server running on port ${port}`));
// import express from "express";
// const app = express();


//------------------------------------------------------------------------------------
//test2

// app.get("/", (req, res) => {
//   const room = req.query.room; // 例: 101
//   const userAgent = req.get("User-Agent"); // 出席端末の情報なども取得可

//   if (!room) {
//     return res.send("教室が指定されていません。");
//   }

//   // 出席を記録（DBやCSVに追記など）
//   console.log(`出席: 教室${room} / 時間: ${new Date().toLocaleString()}`);

//   res.send(`教室${room} の出席を確認しました！`);
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

//------------------------------------------------------------------------------------
//test3
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>出席確認</title>
</head>
<body>
  <h2 id="title"></h2>
  <button onclick="record('入室')">入室</button>
  <button onclick="record('退室')">退室</button>

  <script>
    const params = new URLSearchParams(location.search);
    const room = params.get("room") || "不明";

    document.getElementById("title").textContent = `教室 ${room} 出席ページ`;

    async function record(action) {
      const time = new Date().toLocaleString("ja-JP");
      await fetch("/api/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ room, action, time })
      });
      alert(`${action} を記録しました (${time})`);
    }
  </script>
</body>
</html>


