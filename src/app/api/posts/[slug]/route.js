import { connectToDB } from "@/libs/connectToDB";
import Post from "@/libs/models/posts.model";
import { NextResponse } from "next/server";

export const GET = async (response, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};
