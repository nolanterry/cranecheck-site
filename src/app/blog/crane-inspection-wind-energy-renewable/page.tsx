import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import Link from "next/link";
import type { Metadata } from "next";
import { AuthorByline } from "@/components/author-byline";

export const metadata: Metadata = {
  title: "Crane Inspection for Wind Energy & Renewable Projects: Turbine Erection, Hub Heights & Specialized Requirements",
  description: "Guide to crane inspection for wind energy and renewable projects covering turbine erection crane requirements, extreme hub heights, blade installation rigging, remote site challenges, tandem lifts for nacelles, and foundation pour crane operations.",
  alternates: { canonical: "/blog/crane-inspection-wind-energy-renewable" },
};

export default function CraneInspectionWindEnergyRenewablePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Inspection for Wind Energy & Renewable Projects: Turbine Erection, Hub Heights & Specialized Requirements",
    "description": "Guide to crane inspection for wind energy and renewable projects covering turbine erection crane requirements, extreme hub heights, blade installation rigging, remote site challenges, tandem lifts for nacelles, and foundation pour crane operations.",
    "datePublished": "2026-04-17",
    "dateModified": "2026-04-17",
    "author": {
      "@type": "Organization",
      "name": "CraneCheck Team",
      "url": "https://cranecheck.co/blog/authors/cranecheck-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CraneCheck",
      "url": "https://cranecheck.co"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cranecheck.co/blog/crane-inspection-wind-energy-renewable"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Inspection for Wind Energy & Renewable Projects", "item": "https://cranecheck.co/blog/crane-inspection-wind-energy-renewable" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <ReadingProgressBar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Industry</span>
              <span className="text-xs text-gray-400">April 17, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Crane Inspection for Wind Energy &amp; Renewable Projects: Turbine Erection, Hub Heights &amp; Specialized Requirements</h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">Wind energy construction places some of the most extreme demands on cranes found anywhere in the lifting industry. Hub heights exceeding 300 feet, blade lengths over 200 feet, nacelle weights approaching 400 tons, and remote sites with limited access&mdash;every aspect of wind farm erection pushes cranes and rigging to their operational limits. This guide covers the specialized crane inspection requirements that wind energy and renewable projects demand, from turbine erection crane selection to blade installation rigging, tandem nacelle lifts, and the unique challenges of maintaining inspection quality across sprawling remote sites.</p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              The global wind energy market has grown dramatically, with onshore turbine nameplate capacities now regularly exceeding 6 MW and hub heights climbing past 500 feet on the largest models. Each new generation of turbines demands larger cranes, longer booms, heavier lifts, and more sophisticated rigging&mdash;and the inspection requirements have grown to match. A single wind farm project may involve dozens of turbine erections over several months, with the main erection crane performing hundreds of critical lifts under conditions that would qualify as exceptional on any other construction site.
            </p>

            <p>
              Wind energy crane operations differ from conventional construction lifting in several fundamental ways. The lifts are consistently at or near the crane&apos;s maximum capacity and radius. The work sites are often remote, with limited infrastructure and inconsistent ground conditions. Weather windows are narrow and unpredictable, creating pressure to lift in marginal conditions. And the repetitive nature of turbine erection&mdash;performing the same sequence of heavy lifts dozens of times&mdash;creates fatigue and complacency risks that don&apos;t exist on projects with more varied lifting scopes. Every one of these factors has direct implications for crane inspection frequency, scope, and documentation.
            </p>

            <h2>Crane Types Used in Wind Turbine Erection</h2>

            <p>
              Wind turbine erection requires a carefully coordinated fleet of cranes, each serving a specific role in the construction sequence. The main erection crane handles the heaviest and highest lifts, while assist cranes support assembly operations at ground level and manage the logistics of component staging. Selecting the right crane configuration for each turbine model and site condition is one of the most critical early decisions in wind farm construction planning.
            </p>

            <h3>Main Erection Cranes: Crawler Cranes 400&ndash;1,600 Ton</h3>

            <p>
              The main erection crane on a modern wind farm is almost always a large crawler crane in the 400- to 1,600-ton class. Lattice boom crawler cranes dominate this role because they offer the combination of high capacity, extreme boom lengths (often 350&ndash;500+ feet with luffing jibs), and the ability to travel under load between turbine positions. Manufacturers such as Liebherr, Manitowoc, Kobelco, and Sarens produce the machines most commonly seen on wind farm sites&mdash;models like the Liebherr LTR 11200, Manitowoc 18000, and Liebherr LR 11350.
            </p>

            <p>
              Inspection of these machines is especially demanding. The sheer volume of lattice boom sections&mdash;often 20 or more individual sections making up a single boom&mdash;requires systematic pin-by-pin, chord-by-chord inspection. Boom connections are subject to enormous cyclic loading as the crane performs repeated heavy lifts, and any crack or deformation in a lattice chord or lacing can propagate rapidly under the high stresses involved. For a detailed discussion of lattice boom inspection procedures, see our <Link href="/blog/lattice-boom-crane-inspection">lattice boom crane inspection guide</Link>.
            </p>

            <h3>Assist Cranes and Their Inspection Requirements</h3>

            <p>
              Assist cranes on wind farm sites typically range from 100- to 300-ton hydraulic or all-terrain cranes. These machines handle the assembly of tower sections at ground level, position blade root adapters, support nacelle preparation, and perform general material handling. While assist cranes don&apos;t perform the highest or heaviest lifts, they operate at high utilization rates and are subject to the same remote site conditions as the main erection crane. Their inspection must not be treated as secondary simply because their lifts are less dramatic.
            </p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Turbine Component</th>
                    <th className="px-4 py-3 text-left font-semibold">Typical Weight</th>
                    <th className="px-4 py-3 text-left font-semibold">Lift Height</th>
                    <th className="px-4 py-3 text-left font-semibold">Crane Type / Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white"><td className="px-4 py-3">Base Tower Section</td><td className="px-4 py-3">60&ndash;120 tons</td><td className="px-4 py-3">0&ndash;80 ft</td><td className="px-4 py-3">Crawler 400&ndash;750 ton</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">Mid Tower Section</td><td className="px-4 py-3">50&ndash;100 tons</td><td className="px-4 py-3">80&ndash;200 ft</td><td className="px-4 py-3">Crawler 500&ndash;1,000 ton</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">Top Tower Section</td><td className="px-4 py-3">40&ndash;80 tons</td><td className="px-4 py-3">200&ndash;350 ft</td><td className="px-4 py-3">Crawler 600&ndash;1,200 ton</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">Nacelle</td><td className="px-4 py-3">150&ndash;400 tons</td><td className="px-4 py-3">260&ndash;500+ ft</td><td className="px-4 py-3">Crawler 750&ndash;1,600 ton (tandem possible)</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">Hub &amp; Blade Assembly</td><td className="px-4 py-3">60&ndash;130 tons</td><td className="px-4 py-3">260&ndash;500+ ft</td><td className="px-4 py-3">Crawler 600&ndash;1,200 ton</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">Individual Blade</td><td className="px-4 py-3">15&ndash;35 tons</td><td className="px-4 py-3">260&ndash;500+ ft</td><td className="px-4 py-3">Crawler 400&ndash;800 ton (with blade clamp rigging)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Extreme Hub Height Challenges</h2>

            <p>
              Modern wind turbines are being built taller with each generation. Hub heights of 300 feet are now standard for many onshore models, and the latest 6+ MW turbines reach hub heights of 400&ndash;500 feet, with blade tips extending well past 500 feet above grade. These extreme heights create inspection challenges that are qualitatively different from conventional crane operations.
            </p>

            <h3>Boom and Jib Configuration at 500+ Foot Tip Heights</h3>

            <p>
              Reaching hub heights of 400&ndash;500 feet requires boom and luffing jib combinations that push the limits of crane design. A typical main erection crane on a large turbine project might operate with 350 feet of main boom plus a 150-foot luffing jib, giving a total boom-plus-jib length approaching 500 feet. At these lengths, boom deflection becomes a critical concern&mdash;the tip of the boom can deflect several feet under load, and wind-induced oscillation of the boom itself becomes a significant operational factor.
            </p>

            <p>
              Inspection of boom sections must account for the cumulative effect of repeated high-stress loading at these configurations. Every lattice chord, diagonal, and connection pin in the boom is subjected to bending moments, axial loads, and torsional forces that increase with height. Pendants and backstay connections carry enormous tensile loads and must be inspected for wire rope fatigue, socket integrity, and pin wear at every mobilization. The boom hoist system&mdash;the mechanism that raises and lowers the main boom&mdash;is under constant heavy loading and requires careful inspection of drum lagging, wire rope fleet angles, and brake holding capacity.
            </p>

            <h3>Wind Speed Sensitivity at Height</h3>

            <p>
              Wind speed increases with altitude following a power law profile. At 500 feet above ground, wind speeds are typically 30&ndash;50% higher than at the 33-foot standard measurement height. This means that a ground-level reading of 15 mph may correspond to 20&ndash;22 mph at the boom tip&mdash;a difference that can push the crane past its rated wind speed limit for certain operations. Crane inspection for wind farm work must verify that all anemometer systems are functional and properly positioned, as these instruments become safety-critical in ways they rarely are on conventional construction sites.
            </p>

            <h2>Blade Installation Rigging Inspection</h2>

            <p>
              Wind turbine blades are among the most challenging loads in the crane industry. Modern onshore blades range from 150 to over 250 feet in length, weigh 15&ndash;35 tons, and present enormous sail areas to the wind. The rigging used to lift and position these blades is highly specialized and requires inspection protocols that go well beyond standard rigging checks.
            </p>

            <h3>Blade Clamps and Yokes</h3>

            <p>
              Blade lifting clamps grip the blade root and/or mid-section with hydraulically actuated pads that distribute clamping force across a wide area without damaging the blade&apos;s composite shell. These clamps are engineered for specific blade models and must be matched to the blade geometry. Inspection of blade clamps must verify hydraulic pressure settings, pad condition and alignment, structural integrity of the clamp frame, and proper engagement with the blade profile. Any wear or deformation of the clamping pads can reduce grip force and create a dropped-load hazard.
            </p>

            <h3>Upending Tools and Specialized Rigging</h3>

            <p>
              Many wind turbine erection methods require &quot;upending&quot; the blade from a horizontal transport position to a vertical or near-vertical installation angle. Upending tools are specialized rigging frames that attach to the blade at calculated balance points and allow the crane to rotate the blade through 80&ndash;90 degrees during the lift. These tools experience complex loading as the center of gravity shifts during the rotation, and they must be inspected for structural fatigue, pin wear, locking mechanism integrity, and hydraulic system function.
            </p>

            <p>
              All specialized rigging used in blade installation&mdash;including tag line swivels, blade root alignment fixtures, and tip-handling tools&mdash;must be inspected before each use. The high wind sensitivity of blade lifts means that any rigging failure during installation could result in an uncontrolled blade release at heights exceeding 300 feet, with catastrophic consequences. For comprehensive rigging inspection procedures, refer to our <Link href="/blog/rigging-inspection-requirements">rigging inspection requirements guide</Link>.
            </p>

            <h2>Tandem Lift Operations for Nacelles</h2>

            <p>
              On the largest modern wind turbines, nacelle weights of 300&ndash;400 tons at hub heights of 350&ndash;500 feet can exceed the capacity of even the largest single crawler cranes at the required radius. In these cases, tandem lift operations using two cranes become necessary. Nacelle tandem lifts are among the most complex and hazardous lifting operations performed anywhere in the construction industry.
            </p>

            <h3>Coordination and Load Sharing</h3>

            <p>
              Tandem nacelle lifts require precise coordination between two crane operators, a lift director, and multiple signal persons. The load sharing between the two cranes must be calculated based on sling geometry, rigging attachment points, and the nacelle&apos;s center of gravity. Even small deviations from the planned geometry can shift significant load from one crane to the other. Both cranes must be inspected to the same standard, with particular attention to load moment indicators (LMIs), boom angle indicators, and anti-two-block devices&mdash;all of which become safety-critical during the closely coordinated movements of a tandem lift.
            </p>

            <h3>Communication Systems</h3>

            <p>
              Reliable communication between all parties is essential during tandem nacelle lifts. Radio systems must be inspected for clear transmission and reception, with dedicated frequencies assigned to the lift operation. Backup communication methods must be established and tested. The lift director must have visual contact with both cranes and the load at all times, or must rely on signal persons positioned to provide continuous status updates. Any communication failure during a tandem lift is grounds for an immediate hold on all crane movements until communication is restored. For more on tandem lift planning and execution, see our <Link href="/blog/crane-tandem-lift-requirements">tandem lift requirements guide</Link>.
            </p>

            <h2>Remote Site Challenges</h2>

            <p>
              Wind farms are typically located in rural and remote areas chosen for their consistent wind resources&mdash;hilltops, ridgelines, open plains, and coastal regions. These locations create a unique set of challenges for crane inspection and operations that are rarely encountered on urban or industrial construction sites.
            </p>

            <h3>Ground Conditions and Bearing Capacity</h3>

            <p>
              Wind farm sites often feature variable ground conditions that change significantly across the project footprint. A single wind farm may span several miles, with soil conditions ranging from competent rock to soft clay within the same project boundary. Each turbine pad and crane setup location requires individual geotechnical evaluation. The crane paths between turbine locations must also support the travel loads of the main erection crane, which can impose ground pressures exceeding 15 psi through its tracks while traveling with partial boom configuration.
            </p>

            <p>
              Inspection of ground conditions at each crane setup position is a critical pre-lift activity. The crane&apos;s track bearing area must be confirmed adequate for the planned loads, and temporary crane pads or mats may be required at positions with insufficient natural bearing capacity. For a detailed discussion of ground condition assessment, see our <Link href="/blog/crane-ground-conditions-setup">ground conditions and site setup guide</Link>.
            </p>

            <h3>Access Roads and Crane Assembly at Remote Locations</h3>

            <p>
              Transporting a 1,000+ ton crawler crane to a remote wind farm site requires extensive logistics planning. The crane arrives disassembled in dozens of truck loads, with individual components such as the boom base, car body, and counterweight trays each requiring specialized transport. Access roads must be built or upgraded to handle loads exceeding 60 tons per truck, with minimum road widths of 16&ndash;20 feet and curve radii sufficient for 100+ foot trailers.
            </p>

            <p>
              Crane assembly and disassembly at remote locations typically takes 3&ndash;7 days for a large crawler crane, depending on site conditions and assist crane availability. Each assembly must include a complete post-assembly inspection covering all structural connections, hydraulic systems, electrical controls, wire ropes, and safety devices before the crane enters service. This inspection is arguably more critical on remote wind farm sites than on any other type of project because the consequences of discovering a defect mid-erection are far more severe when replacement parts or repair services may be days away. For more on assembly and disassembly safety, see our <Link href="/blog/crane-assembly-disassembly-safety">crane assembly and disassembly guide</Link>.
            </p>

            <h2>Foundation Pour Crane Requirements</h2>

            <p>
              Before turbine erection begins, each turbine location requires a massive concrete foundation&mdash;typically a gravity base foundation 50&ndash;70 feet in diameter with concrete volumes of 400&ndash;800 cubic yards. The foundation pour phase involves its own set of crane and boom inspection requirements that are often overlooked in the focus on turbine erection.
            </p>

            <h3>Concrete Pump Boom Inspection</h3>

            <p>
              Truck-mounted concrete pump booms are used to place concrete into the foundation forms. These booms extend 100&ndash;200+ feet and operate under constant dynamic loading from concrete flow, boom articulation, and pipeline vibration. Pump boom inspection must cover structural integrity of all boom sections, hydraulic cylinder condition, outrigger stability, and pipeline clamp security. Worn or improperly secured pipeline clamps can release under pressure, creating a high-energy whipping hazard. The pump&apos;s outrigger pads must be verified for adequate ground bearing at each setup position.
            </p>

            <h3>Mobile Cranes for Rebar and Formwork</h3>

            <p>
              Mobile cranes&mdash;typically 50- to 150-ton hydraulic or rough-terrain models&mdash;handle the placement of rebar cages, embedment rings, anchor bolt templates, and formwork sections during foundation construction. These cranes operate on unimproved ground near open excavations, creating stability concerns that must be addressed through proper outrigger setup and setback distances from excavation edges. Inspection of these cranes must include verification that outrigger extension and pad placement meet the crane manufacturer&apos;s requirements for the planned lifts, with particular attention to proximity to the foundation excavation.
            </p>

            <h2>Wind Speed Monitoring &amp; Weather Planning</h2>

            <p>
              Wind is simultaneously the reason the project exists and the greatest operational hazard during construction. Wind speed monitoring and weather planning are more critical on wind farm crane operations than on virtually any other type of lifting project. The irony is unavoidable: the sites chosen specifically for their high and consistent wind resources are the most challenging environments for crane operations.
            </p>

            <h3>Anemometer Placement and Calibration</h3>

            <p>
              Crane-mounted anemometers are the primary tool for real-time wind speed monitoring during lifting operations. On wind farm sites, these instruments must be supplemented by site-level meteorological stations that provide wind data at multiple heights. Inspection must verify that crane-mounted anemometers are properly positioned (typically at the boom tip), calibrated to manufacturer specifications, and providing accurate readings to the operator&apos;s cab display. Site-level met towers should be checked for data logging accuracy and alarm threshold settings.
            </p>

            <h3>Wind Speed Limits by Operation Type</h3>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Operation</th>
                    <th className="px-4 py-3 text-left font-semibold">Max Sustained Wind (mph)</th>
                    <th className="px-4 py-3 text-left font-semibold">Max Gust (mph)</th>
                    <th className="px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white"><td className="px-4 py-3">Tower Section Erection</td><td className="px-4 py-3">20&ndash;25</td><td className="px-4 py-3">30</td><td className="px-4 py-3">Varies by crane OEM and tower height</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">Nacelle Lift (Single Crane)</td><td className="px-4 py-3">15&ndash;22</td><td className="px-4 py-3">25</td><td className="px-4 py-3">Heaviest load at greatest height; most restrictive</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">Nacelle Lift (Tandem)</td><td className="px-4 py-3">12&ndash;18</td><td className="px-4 py-3">22</td><td className="px-4 py-3">Further reduced due to coordination complexity</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">Blade Installation (Horizontal)</td><td className="px-4 py-3">10&ndash;15</td><td className="px-4 py-3">20</td><td className="px-4 py-3">Extreme sail area; most wind-sensitive operation</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">Blade Installation (Vertical/Single Blade)</td><td className="px-4 py-3">12&ndash;18</td><td className="px-4 py-3">22</td><td className="px-4 py-3">Reduced sail area vs. horizontal; still very sensitive</td></tr>
                  <tr className="bg-gray-50"><td className="px-4 py-3">Hub Assembly at Height</td><td className="px-4 py-3">18&ndash;22</td><td className="px-4 py-3">28</td><td className="px-4 py-3">Moderate weight and sail area</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">Crane Assembly/Disassembly</td><td className="px-4 py-3">15&ndash;20</td><td className="px-4 py-3">25</td><td className="px-4 py-3">Per crane manufacturer&apos;s assembly manual</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              These limits represent general industry practice and vary by crane manufacturer, turbine OEM requirements, and site-specific conditions. The lift director and crane operator must always follow the most restrictive applicable limit. For a comprehensive discussion of wind speed limits and monitoring, see our <Link href="/blog/crane-wind-speed-limits">wind speed limits guide</Link>.
            </p>

            <h2>Pre-Erection Inspection Checklist for Wind Farm Cranes</h2>

            <p>
              Wind farm crane operations demand a comprehensive pre-erection inspection that goes beyond standard crane inspection protocols. The following checklist covers the critical inspection points specific to wind energy crane operations, organized by system.
            </p>

            <h3>Structural and Mechanical Systems</h3>

            <ul>
              <li>All lattice boom sections inspected for chord cracks, lacing damage, and connection pin wear</li>
              <li>Boom connection pins checked for proper seating, retention, and lubrication</li>
              <li>Luffing jib structural members and connections inspected</li>
              <li>Pendant lines and backstay connections inspected for wire rope fatigue and socket integrity</li>
              <li>Crawler tracks, drive sprockets, idlers, and track pads inspected for wear and damage</li>
              <li>Swing bearing and gear inspected for wear, lubrication, and bolt torque</li>
              <li>Counterweight installation verified per configuration chart for planned lifts</li>
            </ul>

            <h3>Wire Rope and Rigging Systems</h3>

            <ul>
              <li>Main hoist, auxiliary hoist, and boom hoist wire ropes inspected per <Link href="/blog/crane-wire-rope-inspection-guide">wire rope inspection criteria</Link></li>
              <li>All sheave grooves checked for wear and proper rope seating</li>
              <li>Hook block, overhaul ball, and hook latch inspected</li>
              <li>Blade clamps, yokes, and upending tools inspected for structural integrity and hydraulic function</li>
              <li>All slings, shackles, and below-the-hook devices inspected and load-rated for planned lifts</li>
              <li>Tag lines and tag line swivels inspected and staged</li>
            </ul>

            <h3>Safety Devices and Controls</h3>

            <ul>
              <li>Load moment indicator (LMI) calibrated and functional for all planned boom configurations</li>
              <li>Anti-two-block device tested and verified operational</li>
              <li>Boom angle indicator verified accurate</li>
              <li>Anemometer calibrated and providing accurate readings at operator display</li>
              <li>All operator cab controls and indicators functional</li>
              <li>Emergency stop systems tested from all accessible stations</li>
              <li>Communication systems (radios, intercom) tested on designated frequencies</li>
            </ul>

            <h3>Site and Ground Conditions</h3>

            <ul>
              <li>Crane pad or setup area verified for adequate bearing capacity per geotechnical report</li>
              <li>Crane travel path between turbine locations inspected for grade, bearing capacity, and obstructions</li>
              <li>Swing radius and tail swing clearances verified at each turbine position</li>
              <li>Underground utilities and foundation elements identified and marked</li>
              <li>Access roads verified for crane transport loads</li>
            </ul>

            <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-3">Manage Wind Farm Crane Inspections</h3>
              <p className="text-white/90 mb-6">CraneCheck helps wind energy contractors manage crane inspections across remote sites with offline-capable mobile inspections, tandem lift documentation, and weather condition logging — all synced when connectivity returns.</p>
              <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
            </div>
          </div>
        </article>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-wind-energy-renewable" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
