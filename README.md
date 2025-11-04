# 🎨 Random Painting API

A simple **TypeScript + Express** API that returns random famous paintings with details like title, artist, year, and style.

---

## 🚀 Features

- Returns random painting data each time you hit the endpoint
- Built with TypeScript for type safety
- Can be reused for a web app frontend project

---

## ⚙️ Setup

```bash
git clone https://github.com/NyeinChanLin/random-paintings-api.git
cd random-painting-api
npm install
npm run dev
```

Visit 👉 `http://localhost:3000/random-painting`

---

## 📁 Project Structure

```
src/
 ├── data.ts     // painting data + interfaces + enums
 └── server.ts   // Express server + random endpoint
```

---

## 🧩 Example Output

```json
{
  "title": "Starry Night",
  "artist": "Vincent van Gogh",
  "year": 1889,
  "style": "Impressionism",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
}
```

---

## 🧠 Author

Built by **Nyein Chan Lin**

---
# random-paintings-api
