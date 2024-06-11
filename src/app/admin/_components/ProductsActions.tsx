"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { deleteProduct, toggleProductAvailability } from "../_actions/products";
import { useRouter } from "next/navigation";

type TogglerProps = {
    id: string,
    isAvailableForPurchase: boolean;
};

export function ActiveToggleDropdownItem({ id, isAvailableForPurchase }: TogglerProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    
    return (
        <DropdownMenuItem
            disabled={isPending}
            onClick={() => startTransition(async () => {
                await toggleProductAvailability(id, !isAvailableForPurchase);
                router.refresh();
            })}
        >
            {isAvailableForPurchase ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    );
}


export function DeleteDropdownItem({ id, disabled }: { id: string, disabled: boolean; }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    return (
        <DropdownMenuItem
            variant="destructive"
            disabled={disabled || isPending}
            onClick={() => startTransition(async () => {
                await deleteProduct(id);
                router.refresh();
            })}
        >
            Delete
        </DropdownMenuItem >
    );
}
