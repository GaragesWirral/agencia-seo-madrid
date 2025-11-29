export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Serve static assets directly
    if (pathname.startsWith('/assets/') || pathname.startsWith('/images/')) {
      return env.ASSETS.fetch(request);
    }

    // For all other routes, serve index.html (SPA routing)
    const indexRequest = new Request(
      new URL('/index.html', request.url),
      request
    );
    
    return env.ASSETS.fetch(indexRequest);
  }
};