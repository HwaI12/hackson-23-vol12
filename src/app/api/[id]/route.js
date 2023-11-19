export async function GET(request, { params }) {
    return Response.json({ message: 'Hello World' , slug: params.id});
}