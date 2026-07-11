import Link from "next/link";
import { ContactForm } from "@/components/blocks/contact-form";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background px-6 py-24 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:justify-between">
        
        {/* Left: Call to Action & Info */}
        <div className="flex flex-col gap-8 lg:w-1/2 lg:pr-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Let's build</h2>
            <h2 className="text-4xl font-bold tracking-tight text-muted-foreground md:text-6xl">something great.</h2>
          </div>
          
          <div className="flex flex-col gap-2 mt-8">
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <a href="mailto:hello@yourdomain.com" className="text-lg font-semibold hover:underline">
              hello@yourdomain.com
            </a>
          </div>

          <div className="flex gap-6 mt-8">
            <Link href="https://github.com/yourusername" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              GitHub
            </Link>
            <Link href="https://twitter.com/yourusername" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Twitter / X
            </Link>
            <Link href="https://linkedin.com/in/yourusername" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-5/12">
          <ContactForm />
        </div>
      </div>

      <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <p>© {currentYear} Your Name. All rights reserved.</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
