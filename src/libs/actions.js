"use server";
import { revalidatePath } from "next/cache";
import Posts from "./models/posts.model";
import { connectToDB } from "./connectToDB";
import { signIn, signOut } from "./auth";
import User from "./models/user.model";
import bycrypt from "bcryptjs";

//ADD POST TO DATABASE USING SERVER ACTIONS
export const addPost = async (previousState, formData) => {
  // const title = formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get("slug")
  // const userId = formData.get("userId")

  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Posts({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("Post saved to database");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

// DELETEPOST
export const deletPost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Posts.findByIdAndDelete(id);
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (previousState, formData) => {
  // const title = formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get("slug")
  // const userId = formData.get("userId")

  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin,
    });
    await newUser.save();
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

// DELETEPOST
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Posts.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);

    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

// REGISTER USER
export const registerUser = async (previousState, formData) => {
  const { username, email, password, img, cf_password } =
    Object.fromEntries(formData);

  if (password !== cf_password) {
    return { error: "password does not match" };
  }
  try {
    connectToDB();

    const user = await User.findOne({ email });
    if (user) {
      return { error: "user already exist!" };
    }

    const salt = await bycrypt.genSalt(10);
    const hashedPasword = await bycrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPasword,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

//LOGIN WITH CREDENTIALS
export const loginWithCredentials = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }

    throw error;
  }
};
