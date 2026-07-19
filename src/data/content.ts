import BRAND_IMAGE from "../assets/brand.png";

export type Brand = {
  name: string;
  tagline: string;
  hasImage?: boolean;
  imagePath?: string;
};

export const brands: Brand[] = [
  {
    name: "DiigiiHost",
    tagline: "Making Digital Affordable And Human For Small Businesses",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "Best Rate Websites",
    tagline: "Making Digital Affordable And Human For Small Businesses",
  },
  {
    name: "Anuved",
    tagline: "Rediscovering Purity Through Devotion",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "Soupherb",
    tagline: "Reimagining Wellness With Purpose",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "NM Fest",
    tagline: "Giving A City Its Symbol, Its Pride, And Its Global Identity.",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "Combo Jumbo & COJ",
    tagline: "Transforming Restaurants Into Communities Built On Togetherness",
  },
  {
    name: "Learn & Achieve",
    tagline:
      "Turning Fragmented Learning Into A Nationwide Education Ecosystem",
  },
  {
    name: "Akirhs",
    tagline:
      "Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "NAFSCOB",
    tagline:
      "Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "HEFT",
    tagline:
      "Transforming Heavy-Lifting Certification Into A 3-Day Intelligent, Automated System.",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "World Flair",
    tagline:
      "Unifying Global Sports Procurement Into One Smart, Consolidated Engine.",
  },
  {
    name: "Dr. Gaikwad",
    tagline: "Proof That Science, Design, And Soul Can Coexist.",
    hasImage: true,
    imagePath: BRAND_IMAGE,
  },
  {
    name: "Loma Dental",
    tagline: "Proof That Science, Design, And Soul Can Coexist.",
  },
];

export const NAV_LINKS = [
  { label: "Brand Soul", href: "#brand-soul" },
  { label: "Building For Bharat", href: "#building-for-bharat" },
  { label: "Learn with AG", href: "#learn-with-ag" },
];

export const NEXT_CHAPTER_BLOCKS = [
  [
    {
      text: "My Next Chapter Is About Building With People,",
      start: 0,
      end: 0.1,
    },
    { text: "Not Just For Them.", start: 0.1, end: 0.2 },
  ],
  [
    { text: "Through The Bharat Building Mission,", start: 0.2, end: 0.3 },
    { text: "I'm Creating A Community Of Founders", start: 0.3, end: 0.4 },
    {
      text: "From Every Corner Of India — Tier 2, Tier 3,",
      start: 0.4,
      end: 0.5,
    },
    { text: "And Beyond", start: 0.5, end: 0.6 },
  ],
  [
    {
      text: "Who Want To Grow With Purpose, Not Pressure.",
      start: 0.6,
      end: 0.7,
    },
    { text: "Because Someday, When Someone Says", start: 0.7, end: 0.8 },
    { text: '"Bharat Is Rising,"', start: 0.8, end: 0.85 },
    { text: "I Want To Know", start: 0.85, end: 0.9 },
    { text: "We Helped Build That Rise, With Soul.", start: 0.9, end: 1 },
  ],
];
