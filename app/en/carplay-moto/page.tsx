import type { Metadata } from "next";

import ComparisonPage, {
  type FaqItem,
  type ProductData,
  type RelatedLink,
} from "../ComparisonPage";

export const metadata: Metadata = {
  title: "Best Motorcycle CarPlay Screens 2026 | Top 5 Tested",
  description:
    "A 2026 comparison of the 5 best CarPlay and Android Auto screens for motorcycles, including waterproof models, road testing, pros, cons, and value picks from $129.",
  keywords:
    "motorcycle carplay screen, motorcycle android auto, best motorcycle carplay 2026, motorcycle gps screen, waterproof carplay screen, handlebar carplay display, motorcycle navigation screen",
  alternates: {
    canonical: "https://www.avisconso.fr/en/carplay-moto",
    languages: {
      "fr-FR": "https://www.avisconso.fr/carplay-moto",
      "en-US": "https://www.avisconso.fr/en/carplay-moto",
    },
  },
  openGraph: {
    title: "Best Motorcycle CarPlay Screens 2026 | Top 5 Tested",
    description:
      "We tested motorcycle CarPlay and Android Auto screens for visibility, waterproofing, vibration resistance, setup, and daily usability.",
    type: "article",
    url: "https://www.avisconso.fr/en/carplay-moto",
    images: [
      {
        url: "/carplay-moto/oxaplay-hero.webp",
        width: 1200,
        height: 630,
        alt: "CarPlay screen mounted on a motorcycle",
      },
    ],
    locale: "en_US",
    siteName: "AVIS CONSO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Motorcycle CarPlay Screens 2026 | Top 5 Tested",
    description:
      "Top 5 waterproof motorcycle CarPlay and Android Auto screens tested for real rides.",
    images: ["/carplay-moto/oxaplay-hero.webp"],
  },
};

const faqItems: FaqItem[] = [
  {
    question: "What is the best CarPlay screen for a motorcycle in 2026?",
    answer:
      "Based on our road testing, the OxaPlay Moto is the best motorcycle CarPlay screen in 2026. It combines a bright IPS display, wireless CarPlay and Android Auto, IP67 water resistance, glove-friendly touch, and strong value at about $129.",
  },
  {
    question: "Can a motorcycle CarPlay screen handle rain?",
    answer:
      "The better motorcycle screens are rated for outdoor use. Models such as the OxaPlay Moto advertise IP67 protection, which means they are designed to resist rain, splashes, and dust during normal riding.",
  },
  {
    question: "How do you install a CarPlay screen on a motorcycle?",
    answer:
      "Most models attach to the handlebar with an included mount, then connect to the motorcycle battery or a USB power source. After that, you pair your phone over Bluetooth. A simple installation can take under 10 minutes.",
  },
  {
    question: "Do motorcycle CarPlay screens work with gloves?",
    answer:
      "Quality motorcycle-focused screens are designed with glove-friendly touch input. It is an important feature because riders should not need to remove gloves just to change navigation or audio.",
  },
  {
    question: "Do these screens work with Android phones?",
    answer:
      "Yes. Most modern motorcycle CarPlay screens also support Android Auto, so Android riders can use Google Maps, Waze, Spotify, calls, and voice controls through a familiar interface.",
  },
  {
    question: "Can I use one with a Bluetooth helmet headset?",
    answer:
      "Yes. The common setup is to connect the screen to your phone, then route audio through your intercom or Bluetooth headset, such as Cardo or Sena, for navigation prompts, music, and calls.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "OxaPlay Moto CarPlay Screen",
    image: "https://www.avisconso.fr/carplay-moto/oxaplay-product.png",
    description:
      "Wireless CarPlay and Android Auto screen for motorcycles with IP67 water resistance, bright IPS display, and handlebar mounting.",
    brand: { "@type": "Brand", name: "OxaPlay" },
    sku: "OXAPLAY-MOTO-US",
    offers: {
      "@type": "Offer",
      url: "https://www.oxaplay.com/fr/carplay-moto",
      priceCurrency: "USD",
      price: "129.00",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "OxaPlay" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1500",
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
    headline: "5 Best Motorcycle CarPlay Screens Tested in 2026",
    description:
      "A practical comparison of motorcycle CarPlay and Android Auto screens based on road testing, visibility, mounting, waterproofing, and value.",
    image: "https://www.avisconso.fr/carplay-moto/oxaplay-hero.webp",
    author: { "@type": "Person", name: "David Quentin" },
    publisher: {
      "@type": "Organization",
      name: "AVIS CONSO",
      logo: {
        "@type": "ImageObject",
        url: "https://www.avisconso.fr/projecteur-lp/avisconso.avif",
      },
    },
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
  },
];

const introParagraphs = [
  "CarPlay and Android Auto screens for motorcycles have changed the way riders handle navigation. Instead of stopping to check a phone or relying on a shaky handlebar mount, a dedicated screen gives you a clearer display and a safer phone connection on the road.",
  "Waze, Google Maps, Spotify, and hands-free calls through a Bluetooth helmet headset become easier to manage at a glance. The biggest advantage is comfort, but the safety benefit matters just as much.",
  "Choosing the right model is not obvious. A motorcycle display needs to stay readable in direct sun, handle rain, survive vibrations, work with gloves, and connect reliably every time you ride.",
  "After several weeks of road testing on back roads, highways, wet rides, and hot sunny days, I put together this 2026 comparison of the motorcycle CarPlay screens that are actually worth considering.",
];

const products: ProductData[] = [
  {
    id: 1,
    badge: "/projecteur-lp/badge-1.png",
    name: "OxaPlay Moto",
    price: "$129",
    grade: "A+",
    productImage: "/carplay-moto/oxaplay-product.png",
    ratingLabel: "Overall Rating",
    ratingCaption: "Based on more than 1,500 reviews",
    originalPrice: "$219",
    expertTitle: "Expert take:",
    advantages: [
      "✅ Bright IPS display that stays readable in sun",
      "✅ Wireless CarPlay and Android Auto",
      "✅ IP67 water resistance",
      "✅ Glove-friendly touchscreen",
      "✅ Quick handlebar installation with mount included",
      "✅ Siri and Google Assistant through a Bluetooth headset",
      "✅ Vibration and shock resistance",
      "✅ 2-year manufacturer warranty",
    ],
    disadvantages: [
      "❌ Available online only",
      "❌ High demand can make stock inconsistent",
    ],
    description:
      "The OxaPlay Moto stood out as the strongest motorcycle CarPlay screen in our 2026 testing. The bright IPS display remains readable in summer sunlight, which is essential on a bike. Installation is clean and quick: the universal handlebar mount fits most motorcycles and scooters, and power can be routed to the battery or a USB source. Wireless connection to iPhone or Android is fast, and Waze, Google Maps, Spotify, and calls work smoothly. The glove-friendly touchscreen is a small detail that makes a big difference, while IP67 water resistance and good vibration handling make it feel built for real riding.",
    editorialTip:
      "Editorial note: promotional discounts are often applied automatically on the official site depending on the current offer period.",
    url: "https://www.oxaplay.com/fr/carplay-moto",
  },
  {
    id: 2,
    badge: "/projecteur-lp/badge-2.png",
    name: "Carpuride W603",
    price: "$205",
    grade: "A",
    productImage: "/carplay-moto/carpuride.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      "✅ Practical handlebar remote",
      "✅ CarPlay and Android Auto support",
      "✅ Navigation and voice assistant features",
      "✅ Recognizable Carpuride brand",
    ],
    disadvantages: [
      "❌ More expensive than OxaPlay for similar features",
      "❌ Average brightness in direct sun",
      "❌ Long-term waterproofing is less reassuring",
      "❌ Handlebar mount can feel bulky",
    ],
    url: "https://www.amazon.fr/Carpuride-W603-T%C3%A9l%C3%A9commande-Navigation-Assistant/dp/B0DFPVN1BN/",
  },
  {
    id: 3,
    badge: "/projecteur-lp/badge-3.png",
    name: "Kraft Motorcycle CarPlay Screen",
    price: "$239",
    grade: "B+",
    productImage: "/carplay-moto/kraft5.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      "✅ Dedicated motorcycle CarPlay screen",
      "✅ Android Auto compatibility",
      "✅ Compact design",
      "✅ Good finish",
    ],
    disadvantages: [
      "❌ Price is high for the feature set",
      "❌ Touchscreen is less responsive with thick gloves",
      "❌ Support and documentation may vary by market",
      "❌ Brightness is not ideal in summer sun",
    ],
    url: "https://www.amazon.fr/Kraft-%C3%89cran-Carplay-CarPlay-Android/dp/B0GQVB12BR/",
  },
  {
    id: 4,
    badge: "/projecteur-lp/badge-4.png",
    name: "INNOVV N2",
    price: "$315",
    grade: "B",
    productImage: "/carplay-moto/innovv.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      "✅ Navigation with WonderWheel controls",
      "✅ Good-quality screen",
      "✅ Robust design",
    ],
    disadvantages: [
      "❌ Very high price",
      "❌ More complex installation",
      "❌ Proprietary control system",
      "❌ Heavier than competitors",
      "❌ Limited compatibility with some handlebars",
    ],
    url: "https://www.amazon.fr/INNOVV-N2-navigation-commandes-WonderWheel/dp/B0GFMK8X2M/",
  },
  {
    id: 5,
    badge: "/projecteur-lp/badge-5.png",
    name: "RiderNav R7M",
    price: "$435",
    grade: "B-",
    productImage: "/carplay-moto/ridernav.jpg",
    ratingLabel: "Overall Rating",
    advantages: [
      "✅ CarPlay and Android Auto",
      '✅ 7" motorcycle screen',
      "✅ Motorcycle-focused brand",
    ],
    disadvantages: [
      "❌ Excessive price",
      "❌ Bulky on the handlebar",
      "❌ Interface can feel slow",
      "❌ Waterproofing could be better",
      "❌ Weak value for money",
    ],
    url: "https://www.amazon.fr/RiderNav-R7M-CarPlay-Android-Motos/dp/B0GF291VTK/",
  },
];

const relatedLinks: RelatedLink[] = [
  {
    href: "/en/carplay-voiture",
    icon: "🚗",
    title: "Best CarPlay Screen for Cars 2026",
    description: "Comparison of the 5 best portable CarPlay screens for cars",
  },
  {
    href: "/en",
    icon: "📽️",
    title: "Best Projector 2026",
    description: "Comparison of the 5 best projectors we tested",
  },
];

export default function EnglishCarplayMotoPage() {
  return (
    <ComparisonPage
      frenchPath="/carplay-moto"
      englishPath="/en/carplay-moto"
      title="5 Best Motorcycle CarPlay Screens Tested in 2026"
      subtitle="We tested more than 15 models to identify the 5 best CarPlay and Android Auto screens for motorcycles..."
      authorBio="David, 34, is an engineer and motorcycle enthusiast. He rides more than 9,000 miles a year and tests connected motorcycle accessories to find the most reliable and practical options."
      updatedAt="April 18, 2026"
      scrollLabel="↓ Skip to the ranking ↓"
      heroImage="/carplay-moto/oxaplay-hero.webp"
      heroAlt="CarPlay screen mounted on a motorcycle"
      heroClassName="h-44 sm:h-56 md:h-[480px]"
      introParagraphs={introParagraphs}
      criteriaTitle="What to look for"
      criteriaList={[
        "Screen brightness and sunlight readability",
        "Water resistance, ideally IP67 or better",
        "Wireless CarPlay and Android Auto",
        "Vibration resistance and sturdy mounting",
        "Easy handlebar installation",
      ]}
      avoidTitle="What to avoid:"
      avoidList={[
        "Non-waterproof screens that are risky in rain",
        "Low-brightness models that wash out in sunlight",
        "Screens that do not work well with motorcycle gloves",
        "Products with unclear warranty or support",
        "Fragile, low-quality handlebar mounts",
      ]}
      preRankingText="After weeks of riding tests across highways, local roads, rain, and direct summer sun, I narrowed the list to the 2026 motorcycle CarPlay screens worth your attention."
      rankingTitle="The 5 Best Motorcycle CarPlay Screens of 2026"
      products={products}
      productCtaLabel="Check current price"
      structuredData={structuredData}
      faqTitle="Frequently Asked Questions About Motorcycle CarPlay Screens"
      faqItems={faqItems}
      relatedTitle="More Comparisons"
      relatedLinks={relatedLinks}
    />
  );
}
