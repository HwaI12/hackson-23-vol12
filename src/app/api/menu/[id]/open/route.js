import { NextResponse } from 'next/server';
import Webpage from '../../../../../scripts/crud/webpage.js'

const webpage = new Webpage();

export async function GET(request, {params}) {
    const query = await webpage.select(params.id);
    
    return NextResponse.json(query, { status: 500 })
};