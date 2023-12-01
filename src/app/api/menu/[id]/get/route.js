import Webpage from '../../../../../scripts/crud/webpage.js'

export default async function GET(request, {params}) {
    const webpage = await new Webpage(params.id);
    const query = await webpage.select(params.id)
        .then(() => {
            return query;
        }).catch((error) => {
            return error.message;
        });

};