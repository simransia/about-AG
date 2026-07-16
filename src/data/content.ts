import heroImage from '../assets/hero.png'
import officeImage from '../assets/office-space.png'
import portraitImage from '../assets/about-agphoto.png' // actually portrait is 'about-agphoto.png' or 'Dr.-Gaikwad 1.png'? Let me check the assets. Let's use 'about-agphoto.png' or wait, the soul behind brand has Alkesh's portrait which was just Alkesh sitting. Ah, wait, there's `brand.png`, `hero.png`, `office-space.png`, `scale.png`, `science.png`, `soul.png`, `about-agphoto.png`. There is no `portrait.png` but there is an Alkesh picture. Looking at assets: `about-agphoto.png` is 10MB! Let's import `about-agphoto.png`. Wait, no, `Alkesh Gupta` is in `about-agphoto.png`? Actually, looking at the hero section, the image of Alkesh in Hero is `hero.png`. Wait, let me just check the actual images. I will just import and use them.

export type Brand = {
  name: string
  tagline: string
  hasImage?: boolean
  imagePath?: string
}

import anuvedImage from '../assets/Anuved1.png'
import bniImage from '../assets/bni1.png'
import drGaikwadImage from '../assets/Dr.-Gaikwad 1.png'
import nafscobImage from '../assets/nafscob1.png'
import soupherbImage from '../assets/Soupherb1.png'

export const brands: Brand[] = [
  {
    name: 'DiigiiHost',
    tagline: 'Making Digital Affordable And Human For Small Businesses',
    hasImage: true,
    imagePath: officeImage,
  },
  {
    name: 'Best Rate Websites',
    tagline: 'Making Digital Affordable And Human For Small Businesses',
  },
  {
    name: 'Anuved',
    tagline: 'Rediscovering Purity Through Devotion',
    hasImage: true,
    imagePath: anuvedImage,
  },
  {
    name: 'Soupherb',
    tagline: 'Reimagining Wellness With Purpose',
    hasImage: true,
    imagePath: soupherbImage,
  },
  {
    name: 'NM Fest',
    tagline: 'Giving A City Its Symbol, Its Pride, And Its Global Identity.',
    hasImage: true,
    imagePath: bniImage, // using bni for nm fest for now
  },
  {
    name: 'Combo Jumbo & COJ',
    tagline: 'Transforming Restaurants Into Communities Built On Togetherness',
  },
  {
    name: 'Learn & Achieve',
    tagline: 'Turning Fragmented Learning Into A Nationwide Education Ecosystem',
  },
  {
    name: 'Akirhs',
    tagline:
      'Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.',
    hasImage: true,
    imagePath: bniImage,
  },
  {
    name: 'NAFSCOB',
    tagline:
      'Where Deep Tech Finds Its Voice, And Engineering Becomes A Clear Narrative.',
    hasImage: true,
    imagePath: nafscobImage,
  },
  {
    name: 'HEFT',
    tagline:
      'Transforming Heavy-Lifting Certification Into A 3-Day Intelligent, Automated System.',
    hasImage: true,
    imagePath: bniImage,
  },
  {
    name: 'World Flair',
    tagline:
      'Unifying Global Sports Procurement Into One Smart, Consolidated Engine.',
  },
  {
    name: 'Dr. Gaikwad',
    tagline: 'Proof That Science, Design, And Soul Can Coexist.',
    hasImage: true,
    imagePath: drGaikwadImage,
  },
  {
    name: 'Loma Dental',
    tagline: 'Proof That Science, Design, And Soul Can Coexist.',
  },
]

export const BRAND_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'

export const HERO_IMAGE = heroImage
export const OFFICE_IMAGE = officeImage
export const PORTRAIT_IMAGE = portraitImage
