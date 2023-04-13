export function onRequest(context) {
    return new Response({}, {
        headers: {
            location: 'https://www.youtube.com/watch?v=CXArovLJ60A'
        }
    })
}