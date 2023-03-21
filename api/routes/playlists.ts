import dotenv from "dotenv";
import { Request, Response, Router } from "express";
import mongoose from "mongoose";

dotenv.config();
const router = Router();
mongoose.connect(process.env.MONGO_URI || "");
const playlistSchema = new mongoose.Schema({
  discord_id: String,
  title: String,
  description: String,
  thumbnail: String,
  numTracks: Number,
  url: String
});

const Playlist = mongoose.model(`playlist`, playlistSchema);

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await Playlist.find({});
    res.send(result);
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.send("Error");
  }
});

export default router;

// const pages = [];

// Playlist.find({}, async (err: any, docs: any) => {
//   if (err) return console.error("DB fuckd yo");

//   console.log(docs);
//   // docs.forEach(doc => {
//   //   let embed = new MessageEmbed()
//   //     .setDescription(`**[${doc.title}](${doc.url})**`)
//   //     .setThumbnail(doc.thumbnail)
//   //     .setFooter({ text: `Added by ${doc.discord_id} ` })

//   //   if (doc.description.length >= 1) {
//   //     embed.addField('Description', doc.description)
//   //   }
//   //   pages.push(embed)
//   // })

//   if (pages.length == 0) return console.log("No playlists found");
// });
