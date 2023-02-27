import path from "path";
import express from 'express'
import multer from 'multer'
import cors, { CorsOptions } from "cors";
import { storage } from './multerConfig'
import { CreateMovie } from './database/scripts/CreateMovie';
import { FindFirstMovie } from './database/scripts/FindFirstMovie';
import { FindManyMovies } from './database/scripts/FindManyMovies';
import { Upload } from "./database/scripts/Upload";


const upload = multer ({ storage: storage})
const app = express()
const corsOptions: CorsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"]
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
app.post("/upload", upload.single('file'), Upload)
app.get("/all-movies", FindManyMovies)
app.get("/first-movie/:movieId", FindFirstMovie)
app.post("/create-movie", CreateMovie)

app.listen(8000, () => console.log('Servidor na porta 8000'));
