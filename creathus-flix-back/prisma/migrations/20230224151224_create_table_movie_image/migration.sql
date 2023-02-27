-- CreateTable
CREATE TABLE "movie_images" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "movie_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_images_movieId_key" ON "movie_images"("movieId");

-- AddForeignKey
ALTER TABLE "movie_images" ADD CONSTRAINT "movie_images_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
