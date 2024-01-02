import { connectToDB } from "./connectToDB";
import Posts from "./models/posts.model";
import User from "./models/user.model";
import { unstable_cache as noStore } from "next/cache";

// FECTH POST FROM DATABASE
export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Posts.find();
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

// FETCH A SINGLE POST
export const getSinglePost = async (slug) => {
  // noStore();
  try {
    connectToDB();
    const post = await Posts.findOne({ slug });
    return post;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

// FETCH A SINGLE POST
export const getUser = async (id) => {
  // noStore();
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("Failed to get user");
  }
};

// FETCH ALL USERS
export const getAllUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to get user");
  }
};
