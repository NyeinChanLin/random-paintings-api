import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

export enum PaintingStyle {
  Impressionism = "Impressionism",
  Renaissance = "Renaissance",
  Modern = "Modern",
  Abstract = "Abstract"
}

export interface Painting {
  title: string;
  artist: string;
  year: number;
  style: PaintingStyle;
  imageUrl: string;
}

export const paintings: Painting[] = [
  {
    title: "Starry Night",
    artist: "Vincent van Gogh",
    year: 1889,
    style: PaintingStyle.Impressionism,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1503,
    style: PaintingStyle.Renaissance,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg"
  },
  {
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: 1931,
    style: PaintingStyle.Modern,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
},
  {
  title: "The Night Watch",
  artist: "Rembrandt van Rijn",
  year: 1642,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rembrandt_Harmensz._van_Rijn_-_Nachtwacht_-_Google_Art_Project.jpg/1446px-Rembrandt_Harmensz._van_Rijn_-_Nachtwacht_-_Google_Art_Project.jpg?20110212003431"
 },
 {
  title: "Girl with a Pearl Earring",
  artist: "Johannes Vermeer",
  year: 1665,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://museum.royaldelft.com/wp-content/uploads/2024/01/0670_repro_2-e1706639411534.jpg"
 },
 {
  title: "The Scream",
  artist: "Edvard Munch",
  year: 1893,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg"
 },
 {
  title: "The Birth of Venus",
  artist: "Sandro Botticelli",
  year: 1486,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://cdn.britannica.com/51/239351-138-0D6B3C28/Sandro-Botticelli-Birth-of-Venus.jpg?w=800&h=450&c=crop"
 },
 {
  title: "Guernica",
  artist: "Pablo Picasso",
  year: 1937,
  style: PaintingStyle.Abstract,
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"
 },
 {
  title: "Water Lilies",
  artist: "Claude Monet",
  year: 1916,
  style: PaintingStyle.Impressionism,
  imageUrl: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg"
 },
 {
  title: "The Kiss",
  artist: "Gustav Klimt",
  year: 1908,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"
 },
 {
  title: "American Gothic",
  artist: "Grant Wood",
  year: 1930,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
 },
 {
  title: "The Last Supper",
  artist: "Leonardo da Vinci",
  year: 1498,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The-Last-Supper-Restored-Da-Vinci_32x16.jpg/2560px-The-Last-Supper-Restored-Da-Vinci_32x16.jpg"
 },
 {
  title: "The Great Wave off Kanagawa",
  artist: "Hokusai",
  year: 1831,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Great_Wave_off_Kanagawa2.jpg"
 },
 {
  title: "A Sunday Afternoon on the Island of La Grande Jatte",
  artist: "Georges Seurat",
  year: 1886,
  style: PaintingStyle.Impressionism,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/67/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.png"
 },
 {
  title: "The Garden of Earthly Delights",
  artist: "Hieronymus Bosch",
  year: 1505,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1200px-The_Garden_of_earthly_delights.jpg"
 },
 {
  title: "The Creation of Adam",
  artist: "Michelangelo",
  year: 1512,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Creaci%C3%B3n_de_Ad%C3%A1n.jpg/2560px-Creaci%C3%B3n_de_Ad%C3%A1n.jpg"
 },
 {
  title: "Nighthawks",
  artist: "Edward Hopper",
  year: 1942,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/2560px-Nighthawks_by_Edward_Hopper_1942.jpg"
 },
 {
  title: "Composition VIII",
  artist: "Wassily Kandinsky",
  year: 1923,
  style: PaintingStyle.Abstract,
  imageUrl: "https://www.guggenheim.org/wp-content/uploads/1923/01/37.262_ph_web-1.jpg"
 },
 {
  title: "The Sleeping Gypsy",
  artist: "Henri Rousseau",
  year: 1897,
  style: PaintingStyle.Modern,
  imageUrl: "https://101prints.com/wp-content/uploads/2025/06/The-Sleeping-Gypsy-%E2%80%93-Henri-Rousseau.jpg"
 },
 {
  title: "Whistler's Mother",
  artist: "James McNeill Whistler",
  year: 1871,
  style: PaintingStyle.Modern,
  imageUrl: "https://media.newyorker.com/photos/59096fed1c7a8e33fb38ea17/master/w_2453,h_2560,c_limit/150831_r26901.jpg"
 },
 {
  title: "The Son of Man",
  artist: "René Magritte",
  year: 1964,
  style: PaintingStyle.Abstract,
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg"
 },
 {
  title: "The School of Athens",
  artist: "Raphael",
  year: 1511,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Raffaello_Sanzio.jpg"
 },
 {
  title: "Self-Portrait with Thorn Necklace and Hummingbird",
  artist: "Frida Kahlo",
  year: 1940,
  style: PaintingStyle.Modern,
  imageUrl: "https://en.citaliarestauro.com/wp-content/uploads/sites/2/2022/07/Imagem1.jpg"
 }

 ];
