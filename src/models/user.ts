'use server'

import { Schema, model, models, connect } from "mongoose";
import GetConfig from "@/lib/config";

interface IUser {
    email: string;
    first_name: string;
    last_name: string;
    created_at: Date;
}

const user = models.User || model<IUser>(
    "User",
    new Schema<IUser>({
        email: { type: String, required: true },
        first_name: { type: String, required: false },
        last_name: { type: String, required: false },
        created_at: { type: Date, default: Date.now }
    }), "user"
);

export default async function RegisterUser(email: string, password: string) {
    // 
}