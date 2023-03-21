import mongoose from "mongoose";
import React from "react";

mongoose.connect(import.meta.env.VITE_MONGO_URI || "");

const playlistSchema = new mongoose.Schema({
  discord_id: String,
  title: String,
  description: String,
  thumbnail: String,
  numTracks: Number,
  url: String
});

const Playlist = mongoose.model(`playlist`, playlistSchema);
const pages = [];

Playlist.find({}, async (err: any, docs: any) => {
  if (err) return console.error("DB fuckd yo");

  console.log(docs);
  // docs.forEach(doc => {
  //   let embed = new MessageEmbed()
  //     .setDescription(`**[${doc.title}](${doc.url})**`)
  //     .setThumbnail(doc.thumbnail)
  //     .setFooter({ text: `Added by ${doc.discord_id} ` })

  //   if (doc.description.length >= 1) {
  //     embed.addField('Description', doc.description)
  //   }
  //   pages.push(embed)
  // })

  if (pages.length == 0) return console.log("No playlists found");
});

export const Playlists = (): JSX.Element => {
  return (
    <div id="playlists">
      <h1>Playlists</h1>
    </div>
  );
};
