// This page should never be reached - middleware redirects `/` to `/${locale}`
// If you see this, the middleware isn't working properly
export default function RootPage() {
  return null;
}
