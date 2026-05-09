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
  title: "Crane Sheave & Pulley Inspection: Wear Criteria, Groove Gauging & Replacement per ASME B30",
  description:
    "How to inspect crane sheaves and pulleys for groove wear, flange damage, and bearing failure. Covers groove gauge procedure, ASME B30 removal-from-service criteria, fleet angle limits, and replacement standards.",
  alternates: { canonical: "/blog/crane-sheave-pulley-inspection" },
};

export default function CraneSheavePulleyInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Sheave & Pulley Inspection: Wear Criteria, Groove Gauging & Replacement per ASME B30",
    "description": "How to inspect crane sheaves and pulleys for groove wear, flange damage, and bearing failure. Covers groove gauge procedure, ASME B30 removal-from-service criteria, fleet angle limits, and replacement standards.",
    "datePublished": "2026-05-09",
    "dateModified": "2026-05-09",
    "author": {
      "@type": "Person",
      "name": "Nolan Terry",
      "url": "https://cranecheck.co/blog/authors/nolan-terry"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CraneCheck",
      "url": "https://cranecheck.co"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cranecheck.co/blog/crane-sheave-pulley-inspection"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cranecheck.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://cranecheck.co/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Crane Sheave & Pulley Inspection",
        "item": "https://cranecheck.co/blog/crane-sheave-pulley-inspection"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <ReadingProgressBar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Inspection
              </span>
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Sheave &amp; Pulley Inspection: Wear Criteria, Groove Gauging &amp; Replacement per ASME B30
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              A field-level guide to evaluating sheave groove wear, bearing condition, fleet angle, and removal-from-service thresholds using ASME B30 and manufacturer criteria.
            </p>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />
            <div className="prose prose-gray max-w-none">

              <p>
                Sheaves and pulleys are the quiet workhorses of every crane reeving system. They redirect wire rope loads, multiply mechanical advantage in block-and-tackle arrangements, and absorb millions of bending cycles over a crane&apos;s service life. Because they are tucked inside hook blocks, boom tips, and equalizer assemblies, they rarely get the same inspection attention as wire rope or hooks &mdash; and that is exactly why worn sheaves are a leading cause of accelerated rope fatigue and unexpected rope breaks.
              </p>
              <p>
                ASME B30.2 (overhead and gantry cranes), ASME B30.5 (mobile and locomotive cranes), and ASME B30.16 (overhead underhung cranes) all require sheave inspection as part of periodic and frequent inspection programs. OSHA&apos;s construction crane standard at 29 CFR 1926.1412 incorporates sheave inspection at both the monthly and annual tiers. This guide covers how to inspect sheaves correctly, what to measure, and when to pull them from service.
              </p>

              <h2>Why Sheave Inspection Matters</h2>
              <p>
                A worn sheave groove does not fail by itself &mdash; it destroys the wire rope running through it. When the groove profile no longer matches the rope diameter, the rope contacts the groove on its crowns rather than being supported across its full cross section. This point loading causes individual wires to flatten and break far earlier than they would in a correctly sized groove. A sheave that is 10&ndash;15% worn in the groove can cut service life of the rope it carries by half or more.
              </p>
              <p>
                Beyond rope damage, a cracked or eccentric sheave can seize, causing the rope to slide instead of roll. A seized sheave generates heat and localized rope wear at a single point, rapidly developing a broken-wire cluster that can trigger an abrupt rope failure under load. Bearing failure is even faster: a sheave that cannot rotate freely drags the rope, creating friction heat and compressing the rope against the groove flange under dynamic load.
              </p>
              <p>
                ASME B30.5-2021 section 5-2.4.3 explicitly lists sheaves among the components subject to frequent inspection (at intervals ranging from daily to monthly depending on service severity) and periodic inspection (at 1&ndash;12 month intervals). Inspectors must know what to look for at both levels.
              </p>

              <h2>Types of Sheave Wear</h2>
              <p>
                Not all sheave wear looks the same. Identifying the wear pattern helps diagnose the root cause and decide whether the fix is a replacement sheave, a corrected rope diameter, or a realigned reeving path.
              </p>

              <h3>Throat Wear (Bottom-of-Groove Wear)</h3>
              <p>
                Throat wear is the most common form. The rope bears down into the bottom of the groove under load, and over thousands of cycles the groove deepens. A groove that has worn more than <strong>1/8&Prime; deeper</strong> than the original profile (a commonly cited field threshold; always verify against your manufacturer&apos;s specification) no longer supports the rope correctly. The rope contacts the groove walls at a sharper included angle, generating lateral crushing forces on the rope strands.
              </p>
              <p>
                Throat wear is measured with a groove gauge calibrated to the nominal rope diameter. If the gauge rocks or sits below the sheave rim surface, the groove has worn beyond the usable profile.
              </p>

              <h3>Flange Wear</h3>
              <p>
                Flange wear appears on the side walls of the groove and is caused by fleet angle misalignment, improper rope diameter, or side-loading during multi-layer drum spooling. Heavily worn flanges allow the rope to migrate laterally and jump the sheave under slack-rope conditions or dynamic loading. Flange wear is assessed visually and by comparing the remaining wall thickness at the groove rim against the manufacturer&apos;s minimum dimension.
              </p>

              <h3>Rope Crossover Damage</h3>
              <p>
                Where two rope parts cross inside a block or at a lead sheave under slack conditions, crossover damage creates a flat, scored area on the sheave groove surface. This scored area then abrades every rope pass that follows. Crossover damage is most common in multi-part hook blocks where incorrect rigging allows rope-on-rope contact inside the block. The scored area is typically visible as a bright metallic scuff mark across the groove bottom.
              </p>

              <h3>Cracks and Fractures</h3>
              <p>
                Cast iron sheaves are susceptible to brittle fracture from impact or overload. Steel sheaves can develop fatigue cracks at the hub, spoke roots, or groove flanges. Any visible crack is an immediate removal-from-service condition under ASME B30.2 section 2-2.4.3 and ASME B30.5 section 5-2.4.3. Dye penetrant testing (PT) or magnetic particle testing (MT) should be performed on sheaves that have been subjected to shock loading or overload conditions.
              </p>

              <h2>Groove Gauge Inspection Procedure</h2>
              <p>
                A groove gauge (sometimes called a sheave gauge or rope gauge) is a go/no-go template machined to the nominal rope diameter. The gauge is placed into the sheave groove, and the fit of the gauge relative to the sheave rim and groove profile determines whether the groove is within tolerance.
              </p>

              <h3>Step-by-Step Procedure</h3>
              <ol>
                <li>
                  <strong>Identify the nominal rope diameter</strong> for the reeving system. This is stamped on the crane&apos;s load chart or specified in the manufacturer&apos;s maintenance manual.
                </li>
                <li>
                  <strong>Select the correct groove gauge</strong> for that rope diameter. Gauges are calibrated in 1/16&Prime; increments for smaller ropes and 1/8&Prime; increments for larger ropes.
                </li>
                <li>
                  <strong>Clean the groove</strong> of rope lubricant, dirt, and debris before gauging. Contamination in the groove gives a false reading.
                </li>
                <li>
                  <strong>Insert the gauge</strong> into the groove and allow it to seat under its own weight. Do not force it.
                </li>
                <li>
                  <strong>Check the seating depth</strong>: the top of the gauge should be flush with or slightly above the sheave rim. If the gauge drops below the rim surface, the groove has worn deeper than the rope diameter and the sheave should be removed from service or re-grooved if the design permits.
                </li>
                <li>
                  <strong>Check for rocking</strong>: the gauge should not rock from side to side. Rocking indicates that the groove has widened beyond the rope&apos;s working diameter, reducing lateral support.
                </li>
                <li>
                  <strong>Inspect multiple positions</strong> around the circumference. Uneven wear can occur at rope entry and exit tangent points. Check at 0&deg;, 90&deg;, 180&deg;, and 270&deg; around the groove.
              </li>
                <li>
                  <strong>Document findings</strong> with the gauge size used, the position of any non-conformance, and the name of the inspector.
                </li>
              </ol>

              <h3>Groove Dimension Reference Table</h3>
              <p>
                The table below shows nominal groove diameter ranges by rope diameter. Groove diameter is measured at the bottom of the groove (throat). The &ldquo;new groove&rdquo; range reflects the manufactured tolerance; the &ldquo;maximum worn groove&rdquo; column reflects a commonly applied field criterion. Always confirm against your crane manufacturer&apos;s specification and the applicable ASME B30 volume, as tolerances vary.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Nominal Rope Dia.</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">New Groove Dia. (min&ndash;max)</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Max Worn Groove Dia.</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Groove Radius (new)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-gray-800">1/2&Prime; (12.7 mm)</td>
                      <td className="px-4 py-3 text-gray-600">0.512&Prime;&ndash;0.530&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.562&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.256&Prime;</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">5/8&Prime; (15.9 mm)</td>
                      <td className="px-4 py-3 text-gray-600">0.638&Prime;&ndash;0.656&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.700&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.319&Prime;</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-800">3/4&Prime; (19.1 mm)</td>
                      <td className="px-4 py-3 text-gray-600">0.763&Prime;&ndash;0.781&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.825&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.381&Prime;</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">7/8&Prime; (22.2 mm)</td>
                      <td className="px-4 py-3 text-gray-600">0.888&Prime;&ndash;0.909&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.950&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.444&Prime;</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-800">1&Prime; (25.4 mm)</td>
                      <td className="px-4 py-3 text-gray-600">1.013&Prime;&ndash;1.031&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">1.062&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.506&Prime;</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">1-1/8&Prime; (28.6 mm)</td>
                      <td className="px-4 py-3 text-gray-600">1.138&Prime;&ndash;1.156&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">1.200&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.569&Prime;</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-800">1-1/4&Prime; (31.8 mm)</td>
                      <td className="px-4 py-3 text-gray-600">1.263&Prime;&ndash;1.281&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">1.325&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.631&Prime;</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">1-1/2&Prime; (38.1 mm)</td>
                      <td className="px-4 py-3 text-gray-600">1.513&Prime;&ndash;1.531&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">1.575&Prime;</td>
                      <td className="px-4 py-3 text-gray-600">0.756&Prime;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 -mt-4 mb-6">
                Source: Wire Rope Technical Board (WRTB) Sheave and Drum Groove standards; verify against ASME B30 volume applicable to your crane type and your crane manufacturer&apos;s specification.
              </p>

              <h2>Sheave Bearing Inspection</h2>
              <p>
                Every sheave rotates on a bearing &mdash; either a plain (sleeve) bearing, a roller bearing, or a needle bearing, depending on the application and load cycle. Failed bearings allow the sheave to wobble laterally, cutting into rope strands and flanges simultaneously. Bearing inspection is part of both frequent and periodic inspection programs under ASME B30.
              </p>

              <h3>Heat</h3>
              <p>
                An overloaded or under-lubricated bearing generates heat. After the crane has been operating, carefully touch the sheave hub or axle nut (not while the sheave is moving). A bearing running within normal temperature range will feel warm but not hot to the touch &mdash; typically below 160&deg;F (71&deg;C). Temperatures that are uncomfortable to hold for more than two seconds suggest abnormal friction. An infrared thermometer gives a quantitative reading without contact; compare suspected bearings against identical bearings elsewhere on the same crane.
              </p>

              <h3>Noise</h3>
              <p>
                A healthy sheave runs quietly. Grinding, clicking, or squealing from the sheave assembly indicates bearing wear, contamination, or inadequate lubrication. Note that a single squealing sheave in a large multi-part block can be difficult to locate by ear alone; a mechanic&apos;s stethoscope placed against the sheave axle bolt can isolate the source. Continuous grinding is a removal-from-service indicator.
              </p>

              <h3>Radial and Axial Play</h3>
              <p>
                With the rope removed and the sheave at rest, grasp the sheave rim and attempt to move it radially (toward and away from the sheave axis) and axially (side to side along the pin). ASME B30.2 and B30.5 do not specify a numeric play limit for all applications; the manufacturer&apos;s maintenance manual will define the acceptable clearance for each bearing type. As a general field rule, any visible wobble of the sheave rim under manual force, or any axial movement exceeding approximately 1/16&Prime;, warrants further evaluation by a qualified person. Plain bearings typically have more allowable clearance than rolling-element bearings.
              </p>

              <h3>Lubrication</h3>
              <p>
                Most sheave bearings require periodic grease or oil lubrication per the manufacturer&apos;s schedule. Inspect grease fittings (Zerk fittings) for damage or plugging. If a fitting will not accept grease under normal pump pressure, the bearing may be packed solid with old grease, contaminated, or failing internally. Never over-grease a sealed bearing; excess grease pressure can blow out the seal and introduce contamination.
              </p>

              <h2>Sheave Alignment and Fleet Angle</h2>
              <p>
                The fleet angle is the angle between the wire rope and the plane of the sheave groove when the rope departs the drum or sheave. An excessive fleet angle causes the rope to rub against the sheave flange on every wrap, generating flange wear on the sheave and accelerated surface wire breakage on the rope.
              </p>
              <p>
                ASME B30.2 and B30.5 both reference fleet angle limits for hoisting equipment. The widely applied guideline is:
              </p>
              <ul>
                <li>
                  <strong>Grooved drums:</strong> maximum fleet angle of <strong>2&deg;</strong> from the groove lead line to the first sheave (or to the point of departure from the drum)
                </li>
                <li>
                  <strong>Plain (smooth) drums:</strong> maximum fleet angle of <strong>1.5&deg;</strong> to prevent rope piling on one side of the drum
                </li>
                <li>
                  <strong>Sheave-to-sheave:</strong> maximum fleet angle of <strong>2.5&deg;</strong> at individual block sheaves, though tighter angles are always preferable
                </li>
              </ul>
              <p>
                Fleet angle is measured in the field with a simple string line or a laser alignment tool. String a line along the center of the reeving path and use a protractor or digital angle gauge to measure the departure angle at the sheave. If fleet angle exceeds the limit, the fix is either to relocate the lead sheave (if structurally possible) or to reposition the crane relative to the work to bring the load within the sheave&apos;s designed departure angle.
              </p>
              <p>
                Sheave alignment also refers to the sheaves in a multi-sheave block being co-planar with each other and with the load line. A sheave that is cocked on its pin or a block that has been bent from overload will misalign the reeving path, creating side loading on the rope and uneven wear across the sheave set. Check alignment visually with the block hanging free and unloaded: all sheave flanges should be parallel and in the same plane.
              </p>

              <h2>Replacement Criteria and Removal From Service</h2>
              <p>
                ASME B30.2 section 2-2.4.3, ASME B30.5 section 5-2.4.3, and most crane manufacturer manuals establish removal-from-service criteria for sheaves. The following conditions require immediate removal from service:
              </p>
              <ul>
                <li>
                  <strong>Groove wear beyond manufacturer&apos;s limit</strong> &mdash; or, where manufacturer data is unavailable, groove diameter exceeding the nominal rope diameter by more than 1/8&Prime; for ropes up to 1&Prime; diameter and 3/16&Prime; for larger ropes (WRTB field criterion)
                </li>
                <li>
                  <strong>Any visible crack</strong> in the sheave body, hub, spokes, or flanges
                </li>
                <li>
                  <strong>Flange damage</strong> that allows the rope to jump the sheave or results in a flange height below the rope diameter
                </li>
                <li>
                  <strong>Bearing seizure</strong> &mdash; a sheave that will not rotate freely under manual force with the rope removed
                </li>
                <li>
                  <strong>Eccentric wear</strong> &mdash; a sheave that wobbles more than the manufacturer&apos;s specified runout tolerance when rotated by hand
                </li>
                <li>
                  <strong>Sheave diameter below minimum D/d ratio</strong> &mdash; if the sheave has been machined down during re-grooving to below the minimum pitch diameter required by the rope manufacturer (typically D/d = 18 for 6-strand rope, 25 for rotation-resistant rope), the sheave must be replaced
                </li>
              </ul>

              <h3>The D/d Ratio and Re-Grooving Limits</h3>
              <p>
                The D/d ratio is the ratio of the sheave&apos;s pitch diameter (D) to the rope&apos;s nominal diameter (d). ASME B30.5 recommends minimum D/d ratios based on rope construction:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Rope Construction</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Minimum D/d Ratio (recommended)</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Minimum D/d Ratio (absolute per ASME)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-gray-800">6 &times; 7 (fiber core)</td>
                      <td className="px-4 py-3 text-gray-600">42</td>
                      <td className="px-4 py-3 text-gray-600">34</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">6 &times; 19 (IWRC)</td>
                      <td className="px-4 py-3 text-gray-600">26</td>
                      <td className="px-4 py-3 text-gray-600">18</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-800">6 &times; 37 (IWRC)</td>
                      <td className="px-4 py-3 text-gray-600">18</td>
                      <td className="px-4 py-3 text-gray-600">14</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">8 &times; 19 (IWRC)</td>
                      <td className="px-4 py-3 text-gray-600">21</td>
                      <td className="px-4 py-3 text-gray-600">16</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-800">Rotation-resistant (18 &times; 7, 19 &times; 7)</td>
                      <td className="px-4 py-3 text-gray-600">51</td>
                      <td className="px-4 py-3 text-gray-600">25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 -mt-4 mb-6">
                Source: ASME B30.5-2021, Table 5-1.9.2-1. Always verify against the applicable B30 volume and wire rope manufacturer&apos;s published data.
              </p>
              <p>
                When a sheave is re-grooved to restore a worn profile, material is removed from the groove floor, reducing the pitch diameter. If re-grooving would reduce the pitch diameter below the minimum D/d threshold for the rope in use, the sheave must be replaced rather than re-grooved. This calculation must be performed by a qualified person before any machining work is authorized.
              </p>

              <h2>Key Takeaways</h2>
              <p>
                Sheave and pulley inspection is not a one-step visual check &mdash; it requires groove gauging with the correct tool, bearing assessment for heat, noise, and play, fleet angle verification, and a clear understanding of the removal-from-service criteria in the applicable ASME B30 volume. Key points to carry into the field:
              </p>
              <ul>
                <li>
                  Use a groove gauge matched to the <strong>nominal rope diameter</strong>; a gauge that rocks or sinks below the rim indicates a worn groove that is damaging your rope on every pass.
                </li>
                <li>
                  Identify the wear pattern &mdash; throat wear, flange wear, and crossover scoring each point to a different root cause that must be corrected, not just replaced.
                </li>
                <li>
                  Assess bearings for heat, grinding noise, and radial/axial play at every periodic inspection; a seized bearing destroys rope faster than groove wear.
                </li>
                <li>
                  Verify fleet angle at the drum and at each sheave; exceeding 2&deg; causes simultaneous sheave flange wear and rope surface wire breakage.
                </li>
                <li>
                  Apply the D/d ratio check before authorizing re-grooving; a sheave machined below the minimum pitch diameter must be replaced.
                </li>
                <li>
                  Any crack, missing flange, or seized bearing is an <strong>immediate removal-from-service condition</strong> per ASME B30.2 and B30.5; there is no &ldquo;watch and monitor&rdquo; threshold for structural defects.
                </li>
                <li>
                  Document every sheave inspection with the gauge size used, the groove diameter measured, and the inspector&apos;s name and date &mdash; these records support the periodic inspection certification required under 29 CFR 1926.1412(f) and ASME B30.
                </li>
              </ul>
              <p>
                For a complete look at wire rope inspection criteria that goes hand-in-hand with sheave condition, see our guide on{" "}
                <Link href="/blog/wire-rope-inspection-removal-criteria">
                  wire rope inspection and removal-from-service criteria
                </Link>
                . And for the broader periodic inspection framework that governs when sheave checks are required, see our breakdown of{" "}
                <Link href="/blog/29-cfr-1926-1412-explained">
                  29 CFR 1926.1412
                </Link>
                .
              </p>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Document Every Sheave Inspection &mdash; Digitally</h3>
                <p className="text-white/90 mb-6">
                  CraneCheck gives your team structured sheave and pulley inspection checklists with groove gauge fields, bearing condition ratings, and fleet angle notes &mdash; all timestamped, signed, and stored for OSHA audits.
                </p>
                <a
                  href="https://cranecheck.co/demo"
                  className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  Schedule Demo
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4">
        <RelatedPosts currentSlug="crane-sheave-pulley-inspection" />
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <NewsletterSignup />
      </div>
      <Footer />
    </>
  );
}
