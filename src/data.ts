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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Rembrandt_-_De_Nachtwacht_-_Google_Art_Project.jpg"
 },
 {
  title: "Girl with a Pearl Earring",
  artist: "Johannes Vermeer",
  year: 1665,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg"
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Birth_of_Venus_Botticelli.jpg"
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Claude_Monet_-_Water_Lilies_-_Google_Art_Project.jpg"
 },
 {
  title: "The Kiss",
  artist: "Gustav Klimt",
  year: 1908,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"
 },
 {
  title: "American Gothic",
  artist: "Grant Wood",
  year: 1930,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
 },
 {
  title: "The Last Supper",
  artist: "Leonardo da Vinci",
  year: 1498,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg"
 },
 {
  title: "The Great Wave off Kanagawa",
  artist: "Hokusai",
  year: 1831,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Great_Wave_off_Kanagawa2.jpg"
 },
 {
  title: "A Sunday Afternoon on the Island of La Grande Jatte",
  artist: "Georges Seurat",
  year: 1886,
  style: PaintingStyle.Impressionism,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg"
 },
 {
  title: "The Garden of Earthly Delights",
  artist: "Hieronymus Bosch",
  year: 1505,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg"
 },
 {
  title: "The Creation of Adam",
  artist: "Michelangelo",
  year: 1512,
  style: PaintingStyle.Renaissance,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
 },
 {
  title: "Nighthawks",
  artist: "Edward Hopper",
  year: 1942,
  style: PaintingStyle.Modern,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Nighthawks_by_Edward_Hopper_1942.jpg"
 },
 {
  title: "Composition VIII",
  artist: "Wassily Kandinsky",
  year: 1923,
  style: PaintingStyle.Abstract,
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vassily_Kandinsky%2C_1923_-_Composition_8.jpg"
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
