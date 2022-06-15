import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

const prisma = new PrismaClient()

const run = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update:{},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map(song => ({
              title: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );

  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      name: "User Test",
      image: "https://i.pravatar.cc/300?img=7",
      email: "user@test.com",
      password: bcrypt.hashSync("password", salt),
    },
  });

  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(0).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist #${i +1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      });
    })
  );
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
