import express, { Request, Response } from "express";
import { paintings } from "./data";

const app = express();
const PORT = 3000;

function getRandomPainting() {
  const index = Math.floor(Math.random() * paintings.length);
  return paintings[index];
}

app.get("/random-painting", (req: Request, res: Response) => {
  const randomPainting = getRandomPainting();
  res.json(randomPainting);
});

app.listen(PORT, () => {
  console.log(`🎨 Random Painting API running at http://localhost:${PORT}`);
});
