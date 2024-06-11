"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { formatCurrency } from '@/db/formatters';
import React, { useState } from 'react';
import { addProduct } from '../_actions/products';

export default function ProductForm() {
    const [priceInCents, setPriceInCents] = useState<number | undefined>(0);
    return (
        <form action={addProduct}>
            <div className='space-y-2'>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name='name' required />
            </div>
            <div className='space-y-2'>
                <Label htmlFor="price">Price in Cents</Label>
                <Input
                    type="text"
                    id="price"
                    name='price'
                    required
                    value={priceInCents}
                    onChange={e => setPriceInCents(Number(e.target.value) || undefined)}
                />
            </div>
            <div className="text-muted-foreground">{formatCurrency((priceInCents || 0) / 100)}</div>
            <div className='space-y-2'>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name='description' required />
            </div>
            <div className='space-y-2'>
                <Label htmlFor="file">File</Label>
                <Input type='file' id="file" name='file' required />
            </div>
            <div className='space-y-2'>
                <Label htmlFor="image">Image</Label>
                <Input type='file' id="image" name='image' required />
            </div>

            <Button type='submit'>Save</Button>
        </form>
    );
}
