import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-6 text-center font-sans">
      <div className="flex items-center gap-5">
        <h1 className="border-r border-border pr-5 text-5xl font-bold text-accent">404</h1>
        <h2 className="text-lg font-medium text-text">Page introuvable</h2>
      </div>
      <p className="max-w-md text-sm text-muted">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/now_playing/1"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
