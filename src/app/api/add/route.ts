import { createCar, deleteCar } from '@/utils/Cars';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: Request) {
    const requestBody = await request.json(); // To read request data
    const response = await createCar(requestBody);
    console.log("HIERRRRRR", response);
    return NextResponse.json( response );
}

export async function DELETE(request: NextRequest) {
    const requestBody = await request.json(); // To read request data
    const response = await deleteCar(requestBody);
    const url = `${request.nextUrl.origin}/cars`;
    console.log(url);
    return NextResponse.rewrite(url);
}