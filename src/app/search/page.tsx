import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/site";
import { SearchClient } from "./SearchClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search gift guides, categories and recommendations across HabeshaGifting.",
  alternates: { canonical: routes.search },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs
        trail={[
          { href: routes.home, label: "Home" },
          { href: routes.search, label: "Search" },
        ]}
      />
      <div className="mt-8">
        <SectionHeading
          as="h1"
          eyebrow="Search"
          title="Find a gift or a guide"
          description="Search by recipient, occasion, or the kind of gift you have in mind."
        />
      </div>
      <SearchClient />
    </div>
  );
}
