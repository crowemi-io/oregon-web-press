'use server'

import { Schema, model, models, connect } from "mongoose";
import GetConfig from "@/lib/config";

interface INewsletter {
  email: string | null
  created_at: Date
}

const newsletter  = models.Newsletter || model<INewsletter>(
  "Newsletter",
  new Schema<INewsletter>({
    email: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
  }), "newsletter"
);

export async function subscribe(email: string) : Promise<{success: boolean, message: string | null}> {
  try {
    await connect(
      GetConfig().uri
    );
    const exists = await newsletter.find({ email: email });
    
    if (exists.length > 0) {
      return { success: false, message: "The email provided has already been subscribed." };
    }
    const nl = new newsletter({ email: email });
    await nl.save();
    return { success: true, message: "You\'ve been subscribed" };
  } catch (e) {
    // TODO: log error
    console.log(e)
    return { success: false, message: "Something went wrong!"};
  }

}
