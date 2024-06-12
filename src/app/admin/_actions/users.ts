"use server";

import db from "@/db/db";
import { notFound } from "next/navigation";

export async function deleteUser(id: string) {
    const user = await db.user.delete({
        where: { id },
    });

    if (!user) return notFound();

    return user;
}

// TODO: for testing only
// export async function createUser() {
//     console.log("user created")
//     const user = await db.user.create({
//         data: {
//             email: "BarryAllen11123@gmail.com",
//         }
//     });
// }