import { PageHeader } from "@/components/PageHeader";
import { SiteTabs } from "@/components/SiteTabs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <PageHeader />
        <SiteTabs />
        <Footer />
      </div>
    </div>
  );
}
