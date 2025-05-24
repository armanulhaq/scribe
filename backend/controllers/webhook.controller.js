import User from "../models/user.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
    console.log("Webhook received:", req.body);
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
        console.error("Webhook secret missing!");
        throw new Error("Webhook secret needed!");
    }
    const payload = req.body;
    const headers = req.headers;
    console.log("Webhook headers:", headers);
    const wh = new Webhook(WEBHOOK_SECRET);
    let event;
    try {
        event = wh.verify(payload, headers);
        console.log("Webhook verified successfully:", event.type);
    } catch (err) {
        console.error("Webhook verification failed:", err);
        return res.status(400).json({ message: "Webhook verification failed" });
    }
    if (event.type === "user.created") {
        console.log("Creating new user:", event.data);
        const newUser = new User({
            clerkUserID: event.data.id,
            username:
                event.data.username ||
                event.data.email_addresses[0].email_address,
            email: event.data.email_addresses[0].email_address,
            img: event.data.profile_img_url,
        });
        try {
            await newUser.save();
            console.log("User created successfully:", newUser);
        } catch (error) {
            console.error("Error creating user:", error);
            return res.status(500).json({ message: "Error creating user" });
        }
    }

    if (event.type === "user.deleted") {
        console.log("Deleting user:", event.data.id);
        const deletedUser = await User.findOneAndDelete({
            clerkUserId: event.data.id,
        });

        await Post.deleteMany({ user: deletedUser._id });
        await Comment.deleteMany({ user: deletedUser._id });
    }

    return res.status(200).json({ message: "Webhook received" });
};
