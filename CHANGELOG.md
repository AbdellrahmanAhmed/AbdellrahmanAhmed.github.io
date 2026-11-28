# Changelog

## v3.11 update — 2026-11-28
- New "KNX field projects" block at the top of the KNX section, with a full card for P-29: Private Villa — KNX Wired Smart Home (New Cairo), code VIL-ESM-001, in progress (ground- and first-floor lighting live, roof and garden pending): role, tools, summary, highlights, on-site challenges and a plate (155 group addresses, 64 lighting circuits, 6 keypad buttons, 6 shutters).
- The older short P-29 cards in Latest sites and in the KNX grid were removed so the project appears once in full; its register row now matches the card.
- "Now" card: 1 site handed over, 5 in progress.

## v3.11 — 2026-11-21
- Version named for November 2026.
- Each period card now shows the position held in small type under its title: Smart Home & Automation Engineer · Internship (training), Technical Office Engineer (probation), Technical Site Engineer (current role). The "Now" card keeps its title, with the position under it and its own figures: 6 projects, 2 finished, 4 in progress.
- New projects from the ERA Suite work log, in a new register group (last week of October and November 2026): P-29 villa KNX system in Sodic East Town, P-30 Palm Hills villa installed and handed over, P-31 Royal Lagoons, P-32 Bel Air, P-33 Swan Lake, P-34 Valori, Smouha (Alexandria).
- Latest sites: Palm Hills (P-30) and Sodic East Town (P-29) added at the top; P-19 and P-24 stay in the register and the KNX section.
- KNX section: Sodic East Town villa system added (155 group addresses, 72 actuator channels, ALLinBOX as IP interface).
- Problems solved: gate opener and motor board, H.265 on an intercom master station, PoE and power budgets at Palm Hills.
- P-19 row updated with the closing visit on 22 October; P-22 row points to its installation as P-30.
- Systems: Omada Wi-Fi 6, 16-channel NVRs, Philips smart locks. Credentials: Cisco Packet Tracer (Oct 2026).
- Totals: 34 register projects, 35+ IP cameras; hero label now "Alexandria → Luxor".
- Link preview now shows "34 PROJECTS" (og:image ?v=5); LinkedIn banner and WhatsApp cover updated with the new title and number.

## v3.1.0 — 2026-11-02 · launch
- Full v3 back at the site root; the temporary maintenance page is retired.
- New job title from 1 November 2026: Technical Site Engineer (was Technical Office). Updated in the hero, meta and link preview text.
- Training and probation marked as completed; a third "Now · Technical Site Engineer" card added beside the two period cards.
- Link preview title line changed to "TECHNICAL SITE ENGINEER" (og:image ?v=4); the LinkedIn banner and WhatsApp cover were updated to match.

## Maintenance page — 2026-10-21
- The site root now shows a temporary "programming mode" page until the final v3 launch at the end of October 2026: totals, training and probation summary, systems, areas, credentials and full contact details, with a countdown and a link to v2.
- The full v3 page is kept as the Project's `index.html` (source of truth) and in git history (commit 7604680); it is not published on a side path while it is being finished. At launch it replaces this page at the root.

## v3.0.1 — 2026-10-21
- Training period start corrected to 6 April 2026 (field projects P-01 to P-17 start in May).

## v3.0.0 — 2026-10-21
- Projects P-18 to P-28 from the probation dossier (28 Jul – 21 Oct 2026) added to the register, grouped as training and probation periods.
- New "Latest sites": Laian Compound villa (P-18), first KNX programming on site (P-24), Madinaty villa handover (P-19), Luxor smart hotel rooms (P-20).
- New KNX on ETS6 section: KNX Advanced final project, hospital ETS6 project (P-23), first on-site KNX device (P-24). Section channels now run CH 11 to CH 19.
- Four new problems solved: Madinaty faults, Cyber Lock M1 mechanical fault, devices that would not join the network, NVR with a phantom drive.
- New tools: CREATIVE v4.0.0 network survey and handover, ERA documents bot; ERA Suite, group address generator and Odoo cards updated.
- New writing (ELV rough-in report, DND datasheets, actuator wiring guide, Arabic catalogues), skills, GVS KNX training credential, Odoo Accounting course.
- Totals: 28 register projects, 25+ IP cameras, 175 logged tasks; Deco Mesh and Hik-Connect added to systems; KNX added to the contact pitch.
- Link preview updated to "28 PROJECTS" (og:image ?v=3); footer links to earlier versions.
- v2 archived under `/v2/` and on the `v2-single-file` branch.

## v2.0.0 — 2026-10-09
- Link preview image (og-image.jpg) for WhatsApp, LinkedIn and Facebook.
- KNX Advanced certification added (KNX Association, Sep 2026).
- New single-file portfolio page, English and Arabic with a language switch, light and dark themes.
- Sections: field systems, field work (latest sites, project register, problems solved), a tool for every stage, software, learning, technical writing, skills, contact.
- Old Flutter site moved to `/v1/`, and kept unchanged on the `v1-flutter` branch.
- Root `flutter_service_worker.js` replaced with a clean-up worker so returning visitors stop seeing the cached Flutter site.

## v1.0.0 — 2025-03-02
- Original Flutter web portfolio.
