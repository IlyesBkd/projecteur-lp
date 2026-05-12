import type { Metadata } from "next";

import ComparisonPage, {
  type FaqItem,
  type ProductData,
} from "../ComparisonPage";

export const metadata: Metadata = {
  title: "Best CarPlay Screen for Cars 2026 | Top 5 Tested",
  description:
    "A 2026 comparison of the 5 best portable CarPlay and Android Auto screens for cars, with hands-on notes, pros, cons, and value picks from $129.",
  keywords:
    "carplay screen for car, wireless carplay screen, android auto display, best carplay screen 2026, portable carplay screen, car touchscreen, aftermarket carplay, wireless android auto for car",
  alternates: {
    canonical: "https://www.avisconso.fr/en/carplay-voiture",
    languages: {
      "fr-FR": "https://www.avisconso.fr/carplay-voiture",
      "en-US": "https://www.avisconso.fr/en/carplay-voiture",
    },
  },
  openGraph: {
    title: "Best CarPlay Screen for Cars 2026 | Top 5 Tested",
    description:
      "We tested more than 20 portable CarPlay and Android Auto screens for cars. Here are the 5 models worth considering in 2026.",
    type: "article",
    url: "https://www.avisconso.fr/en/carplay-voiture",
    images: [
      {
        url: "/carplay-voiture/oxaplay-hero.webp",
        width: 1200,
        height: 630,
        alt: "Portable CarPlay screen installed in a car",
      },
    ],
    locale: "en_US",
    siteName: "AVIS CONSO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CarPlay Screen for Cars 2026 | Top 5 Tested",
    description:
      "Top 5 portable CarPlay and Android Auto screens for cars, tested for everyday driving.",
    images: ["/carplay-voiture/oxaplay-hero.webp"],
  },
};

const faqItems: FaqItem[] = [
  {
    question: "What is the best CarPlay screen for a car in 2026?",
    answer:
      "Based on our testing, the OxaPlay 10.26-inch model is the best portable CarPlay screen for cars in 2026. It offers a large HD IPS display, wireless CarPlay and Android Auto, quick setup, and strong value at about $129.",
  },
  {
    question: "Do portable CarPlay screens work with most cars?",
    answer:
      "Yes. Portable screens like the OxaPlay are designed to work with almost any car because they mount on the dashboard and plug into a 12V outlet. They do not require replacing the factory stereo.",
  },
  {
    question: "What is the difference between wired and wireless CarPlay?",
    answer:
      "Wired CarPlay requires plugging in your iPhone for every drive. Wireless CarPlay connects automatically over Bluetooth and Wi-Fi once you start the car, which is much more convenient for daily use.",
  },
  {
    question: "How do you install a portable CarPlay screen?",
    answer:
      "Installation is simple: attach the mount to the dashboard, plug the power cable into the 12V outlet, turn on the screen, and pair your phone over Bluetooth. The process usually takes just a few minutes.",
  },
  {
    question: "Are portable CarPlay screens compatible with Android phones?",
    answer:
      "Most modern portable CarPlay screens also support Android Auto, so Android users can use Google Maps, Waze, Spotify, calls, and voice controls in the same type of interface.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: 'OxaPlay 10.26" Portable CarPlay Screen',
    image: "https://www.avisconso.fr/carplay-voiture/oxaplay-product.jpg",
    description:
      'Wireless CarPlay and Android Auto screen for cars with a 10.26" HD display, quick dashboard setup, and broad vehicle compatibility.',
    brand: { "@type": "Brand", name: "OxaPlay" },
    sku: "OXAPLAY-1026-US",
    offers: {
      "@type": "Offer",
      url: "https://www.oxaplay.com/fr/carplay-voiture",
      priceCurrency: "USD",
      price: "129.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "OxaPlay" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2000",
      bestRating: "5",
      worstRating: "1",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "5 Best CarPlay Screens for Cars Tested in 2026",
    description:
      "A practical comparison of portable CarPlay and Android Auto screens for cars, based on real-world use and 2026 value.",
    image: "https://www.avisconso.fr/carplay-voiture/oxaplay-hero.webp",
    author: { "@type": "Person", name: "David Quentin" },
    publisher: {
      "@type": "Organization",
      name: "AVIS CONSO",
      logo: {
        "@type": "ImageObject",
        url: "https://www.avisconso.fr/projecteur-lp/avisconso.avif",
      },
    },
    datePublished: "2026-04-15",
    dateModified: "2026-04-18",
  },
];

const introParagraphs = [
  "Portable CarPlay and Android Auto screens have made older cars feel modern again. Instead of replacing the head unit or paying for a custom installation, you can mount a separate touchscreen on the dash, plug it into the 12V outlet, and connect your phone wirelessly.",
  "Waze, Google Maps, Spotify, Apple Music, hands-free calls, and voice messages are all easier to access on a wide, readable touchscreen. It is practical, safer than handling a phone, and much more affordable than many factory infotainment upgrades.",
  "The market is crowded, though. The real questions are simple: which screen is actually pleasant to use, which features matter most, and which model gives you the best value without feeling cheap?",
  "After several weeks of real-world driving tests during the day, at night, on highways, and around town, I put together this comparison to make the choice easier.",
];

const products: ProductData[] = [
  {
    id: 1,
    badge: "/projecteur-lp/badge-1.png",
    name: 'OxaPlay 10.26"',
    price: "$129",
    grade: "A+",
    productImage: "/carplay-voiture/oxaplay-product.jpg",
    ratingLabel: "Overall Rating",
    ratingCaption: "Based on more than 2,000 reviews",
    originalPrice: "$219",
    expertTitle: "Expert take:",
    advantages: [
      '✅ Large 10.26" HD IPS display',
      "✅ Wireless CarPlay and Android Auto",
      "✅ Installs in about 2 minutes",
      "✅ Backup camera support with automatic switching",
      "✅ Siri and Google Assistant voice control",
      "✅ Built-in speaker plus AUX and FM output",
      "✅ Compatible with nearly all vehicles",
      "✅ 2-year manufacturer warranty",
    ],
    disadvantages: [
      "❌ Available online only",
      "❌ High demand can make stock inconsistent",
    ],
    description:
      'The OxaPlay became our top portable CarPlay screen for 2026 because it feels complete without being complicated. The 10.26" IPS display is large, bright, and easy to read in everyday driving, while the 1600 x 600 resolution gives maps and media a clean look. Setup is refreshingly simple: mount it, plug it into the 12V outlet, and pair your iPhone or Android phone. Wireless CarPlay, Android Auto, Waze, Spotify, Apple Music, and calls all run smoothly, and the touchscreen feels responsive. Backup camera compatibility is a useful safety bonus, and the AUX/FM audio options make it easy to route sound through the car speakers.',
    editorialTip:
      "Editorial note: promotional discounts are often applied automatically on the official site depending on the current offer period.",
    url: "https://www.oxaplay.com/fr/carplay-voiture",
  },
  {
    id: 2,
    badge: "/projecteur-lp/badge-2.png",
    name: "AWESAFE CarPlay Stereo",
    price: "$289",
    grade: "A",
    productImage: "/carplay-voiture/awesafe.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      '✅ Good-quality 7" touchscreen',
      "✅ CarPlay and Android Auto support",
      "✅ Built-in Bluetooth",
      "✅ Solid USB and AUX connectivity",
    ],
    disadvantages: [
      "❌ More complex installation",
      "❌ Requires a compatible DIN dashboard slot",
      "❌ Smaller screen than portable competitors",
      "❌ CarPlay is not fully wireless",
    ],
    url: "https://www.amazon.fr/AWESAFE-Autoradio-Tactile-compatibles-Bluetooth/dp/B0FH67L13H/",
  },
  {
    id: 3,
    badge: "/projecteur-lp/badge-3.png",
    name: "URVOLAX Camera + Screen",
    price: "$279",
    grade: "B+",
    productImage: "/carplay-voiture/urvolax.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      "✅ Wireless backup camera included",
      "✅ CarPlay-compatible screen",
      "✅ Wireless installation",
      "✅ Good value for the bundle",
    ],
    disadvantages: [
      "❌ Lower screen quality",
      "❌ Interface is less responsive",
      "❌ Camera quality is average in low light",
      "❌ Documentation and support can be uneven",
    ],
    url: "https://www.amazon.fr/URVOLAX-Camera-Recul-sans-Fil/dp/B0FD3MGCTJ/",
  },
  {
    id: 4,
    badge: "/projecteur-lp/badge-4.png",
    name: "CarpodGo T3 Pro",
    price: "$249",
    grade: "B",
    productImage: "/carplay-voiture/carpodgo.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      "✅ Fully wireless CarPlay",
      "✅ Compact design",
      "✅ Attractive price",
    ],
    disadvantages: [
      "❌ Smaller display",
      "❌ Brightness is weak in direct sun",
      "❌ Build quality feels average",
      "❌ Bluetooth can be unstable",
      "❌ No backup camera support",
    ],
    url: "https://www.amazon.fr/enti%C3%A8rement-CarpodGo-T3-Pro-supportant/dp/B0D8W377G2/",
  },
  {
    id: 5,
    badge: "/projecteur-lp/badge-5.png",
    name: "Carpuride W602BS Pro",
    price: "$389",
    grade: "B-",
    productImage: "/carplay-voiture/carpuride.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      "✅ Built-in Bluetooth and intercom features",
      "✅ CarPlay and Android Auto",
      "✅ Recognizable Carpuride brand",
    ],
    disadvantages: [
      "❌ Mid-size screen",
      "❌ Interface can feel slow",
      "❌ Built-in speaker is limited",
      "❌ Mount does not feel very sturdy",
      "❌ Can heat up during longer use",
    ],
    url: "https://www.amazon.fr/Carpuride-W602BS-Pro-Bluetooth-Interphone/dp/B0FV35DR9D/",
  },
];

export default function EnglishCarplayCarPage() {
  return (
    <ComparisonPage
      frenchPath="/carplay-voiture"
      englishPath="/en/carplay-voiture"
      title="5 Best CarPlay Screens for Cars Tested in 2026"
      subtitle="We tested more than 20 models to identify the 5 best portable CarPlay and Android Auto screens..."
      authorBio="David, 34, is an engineer by training and a car tech enthusiast. He spends his time testing the latest auto accessories to find the most practical and reliable everyday upgrades."
      updatedAt="April 15, 2026"
      scrollLabel="↓ Skip to the ranking ↓"
      heroImage="/carplay-voiture/oxaplay-hero.webp"
      heroAlt="Portable CarPlay screen installed in a car"
      heroClassName="h-44 sm:h-56 md:h-[480px]"
      introParagraphs={introParagraphs}
      criteriaTitle="What to look for"
      criteriaList={[
        "Screen size and display quality",
        "Wireless CarPlay and Android Auto",
        "Broad compatibility with different vehicles",
        "Fast plug-and-play installation",
        "Audio options such as AUX, FM, Bluetooth, and built-in sound",
      ]}
      avoidTitle="What to avoid:"
      avoidList={[
        'Screens under 7" that are too small for navigation',
        "Wired-only models that require a cable for every drive",
        "Screens without backup camera support",
        "Products with unclear warranty or support",
        "Slow, poorly optimized interfaces",
      ]}
      preRankingText="After weeks of testing in real driving conditions, I narrowed the field to the 2026 portable CarPlay screens that deserve attention."
      rankingTitle="The 5 Best CarPlay Screens of 2026"
      products={products}
      productCtaLabel="Check current price"
      structuredData={structuredData}
      faqTitle="Frequently Asked Questions About CarPlay Screens for Cars"
      faqItems={faqItems}
    />
  );
}
