import db from "@/db/db";
import { notFound } from "next/navigation";
import Stripe from 'stripe';

export default async function PurchasePage({ params: { id } }: { params: { id: string; }; }) {

  const product = await db.product.findUnique({ where: { id } });

  if(!product) return notFound();

  // const stripe = new Stripe()

  return (
    <div>product purchase page</div>
  );
}
