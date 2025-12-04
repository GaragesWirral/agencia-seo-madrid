
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to fetch the requested asset
    let response = await env.ASSETS.fetch(request);
    
    // For SPA: If the request results in a 404 and is likely a navigation (doesn't have a file extension),
    // serve index.html instead.
    if (response.status === 404 && !url.pathname.includes('.')) {
      response = await env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request));
    }
    
    return response;
  },
};
