import { connectToDB } from "@/libs/connectToDB";
import Post from "@/libs/models/posts.model";
import { NextResponse } from "next/server";

export const GET = async (response) => {
  try {
    connectToDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};
