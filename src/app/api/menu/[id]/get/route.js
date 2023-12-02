import { NextResponse } from 'next/server';
import Webpage from '../../../../../scripts/crud/webpage.js'

export default async function GET(request, {params}) {
    const webpage = await new Webpage(params.id);
    const query = await webpage.select(params.id);
    
    return NextResponse.json({}, { status: 500 })
};