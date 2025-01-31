import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({
        todos: ['todo 1','todo 2']
    })
}

export async function POST() {
    return NextResponse.json({todos: 
        'Todo 3'
    },{status: 201})
}

export async function DELETE() {
    return NextResponse.json({todos: 'Todo 4'})
}