import BookDemoButton from "@/components/ui/BookDemoButton";
import Photo from "@/components/ui/Photo";
import SectionLabel from "@/components/ui/SectionLabel";
import TermList from "@/components/ui/TermList";

const metrics = [
  "Verification activity",
  "Match success/failure rates",
  "Processing volumes",
  "Active devices and terminals",
  "Location performance",
  "Access events",
  "Operational exceptions",
  "Customer adoption",
  "System uptime",
  "Historical activity",
  "Staff/admin access",
  "Integration status",
];

export default function Dashboard() {
  return (
    <section className="section-pad bg-sky-50">
      {/* Below lg the text wrappers dissolve (contents) so the image can sit right under the label (client feedback, 5 Nov 2026) */}
      <div className="container-page flex flex-col gap-6 lg:flex-row lg:gap-10">
        <div className="flex flex-col justify-between gap-8 max-lg:contents lg:min-h-[417px] lg:flex-1">
          <div className="flex flex-col gap-6 max-lg:contents">
            <SectionLabel className="max-lg:order-first">Merchant Dashboard</SectionLabel>
            <div className="flex flex-col gap-4">
              <h2 className="heading-md max-w-[512px]">Every Location, One View</h2>
              <div className="flex flex-col gap-6 text-base leading-6">
                <TermList label="Monitor" items={metrics} />
                <p>
                  <strong className="font-semibold">Turn data into decisions</strong>: Spot peak arrival windows, high-volume
                  locations, bottlenecks, device issues, repeat verification failures, adoption trends, and workflow
                  opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-lg:mt-2 lg:justify-start">
            <BookDemoButton>Request Dashboard Demo</BookDemoButton>
          </div>
        </div>
        <Photo
          src="/images/enterprises/dashboard.webp"
          alt="Manager reviewing the TruePas merchant dashboard with verification and location analytics"
          className="h-64 rounded-2xl shadow-card-strong max-lg:order-first md:h-[417px] lg:flex-1"
        />
      </div>
    </section>
  );
}
