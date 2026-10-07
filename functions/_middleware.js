// optepia.fr (et www) affiche la page de présentation ; app.optepia.fr reste l'application.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname;
  const isSite = host === 'optepia.fr' || host === 'www.optepia.fr';
  if (isSite && (url.pathname === '/' || url.pathname === '/index.html')) {
    return context.env.ASSETS.fetch(new Request(new URL('/accueil', url), context.request));
  }
  return context.next();
}
