import type { Metadata } from "next";

import ComparisonPage, { type ProductData } from "./ComparisonPage";

export const metadata: Metadata = {
  title: "5 Best Projectors Tested in 2026 - AVIS CONSO",
  description:
    "We tested more than 30 projectors to identify the 5 best models of 2026. A clear buying guide with hands-on notes, pros, cons, and value picks.",
  alternates: {
    canonical: "https://www.avisconso.fr/en",
    languages: {
      "fr-FR": "https://www.avisconso.fr/",
      "en-US": "https://www.avisconso.fr/en",
    },
  },
  openGraph: {
    title: "5 Best Projectors Tested in 2026 - AVIS CONSO",
    description:
      "A practical 2026 projector comparison for home theater, streaming, gaming, and portable use.",
    type: "article",
    url: "https://www.avisconso.fr/en",
    images: [
      {
        url: "/projecteur-lp/hero-projector.jpg",
        width: 1200,
        height: 630,
        alt: "Home theater projector setup",
      },
    ],
    locale: "en_US",
    siteName: "AVIS CONSO",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Best Projectors Tested in 2026 - AVIS CONSO",
    description:
      "We compared more than 30 projectors to find the best 2026 picks for US shoppers.",
    images: ["/projecteur-lp/hero-projector.jpg"],
  },
};

const introParagraphs = [
  "Today's projectors do much more than throw an image on a wall. Many now work like compact smart entertainment hubs, with Wi-Fi or Bluetooth connections that make it easy to stream movies, shows, games, or presentations from a phone, tablet, or laptop.",
  "They have also become smaller and easier to move around. A good model can handle movie night at home, a work presentation, a weekend away, or even an outdoor screening without turning setup into a project of its own.",
  "That mix of big-screen impact and portability is why more buyers are looking at projectors instead of a second TV.",
  "The hard part is choosing well: which specs actually matter, which features are worth paying for, and how much do you need to spend to get a sharp, bright picture without overpaying?",
  "After several weeks comparing, testing, and checking the most interesting models available right now, I put together this straightforward guide to help you find the projector that best fits your room, your habits, and your budget.",
];

const criteriaList = [
  "Picture quality, including resolution and brightness",
  "Built-in sound that is usable without extra gear",
  "Wireless connectivity and device compatibility",
  "Portability and simple setup",
  "Lamp life, reliability, and day-to-day convenience",
];

const avoidList = [
  "Projectors limited to 1080p or below when you want a premium image",
  "Bulky designs that are annoying to set up",
  "Low-brightness models under 2,500 lumens",
  "Projectors without keystone correction or autofocus",
  "Inflated prices that do not match the feature set",
];

const products: ProductData[] = [
  {
    id: 1,
    badge: "/projecteur-lp/badge-1.png",
    name: "NEXGEAR V12 4K",
    price: "$239",
    grade: "A+",
    productImage: "/projecteur-lp/product-nexgear.png",
    scoreImage: "/projecteur-lp/scores-top1.png",
    ratingLabel: "Overall Rating",
    ratingImage: "/projecteur-lp/rating-9-9.png",
    ratingCaption: "Based on more than 50,000 reviews",
    originalPrice: "$269",
    expertTitle: "Expert take:",
    advantages: [
      "✅ European assembly and packaging",
      "✅ Impressive 4K picture quality",
      "✅ Blue-light reduction technology",
      "✅ Wireless phone screen sharing",
      "✅ Autofocus",
      "✅ Very effective keystone correction",
      "✅ Built-in smart platform with Google TV, Netflix, Disney+, and Prime Video",
      "✅ Excellent value for the feature set",
    ],
    disadvantages: [
      "❌ Available online only",
      "❌ High demand can make stock inconsistent",
    ],
    description:
      "Among all the models we tested this year, the NEXGEAR quickly stood out as one of the strongest surprises. It feels well built from the first setup, with clean finishing, pleasant materials, and a sturdy design. The image quality is the real highlight: the lens delivers strong clarity, bright colors, and a picture that looks natural rather than oversharpened. The blue-light reduction feature is also unusual in this price range and makes longer movie sessions easier on the eyes. The NEXGEAR is easy to live with, too. Autofocus, keystone correction, and a simple smart interface make setup fast, whether you use it in a living room, bedroom, backyard, or for a presentation. For streaming, gaming, and casual home theater, it hits an unusually good balance of performance, design, and price.",
    editorialTip:
      "Editorial note: discounts are often applied automatically on the official site depending on the current promotion period.",
    url: "https://www.nex-gear.fr/",
  },
  {
    id: 2,
    badge: "/projecteur-lp/badge-2.png",
    name: "Dangbei Atom",
    price: "$779",
    grade: "A",
    productImage: "/projecteur-lp/product-dangbei.jpg",
    scoreImage: "/projecteur-lp/scores-top3.png",
    ratingLabel: "Overall Rating",
    ratingImage: "/projecteur-lp/rating-9-2.png",
    advantages: [
      "✅ VIDAA interface",
      "✅ Portable design",
      "✅ Long lamp life",
      "✅ Versatile connectivity",
    ],
    disadvantages: [
      "❌ Expensive",
      "❌ Limited battery life",
      "❌ Audio quality could be better",
      "❌ Contrast and black levels are limited",
      "❌ Automatic adjustments are not always perfect",
    ],
    url: "https://www.fnac.com/DANGBEI-Atom-1080P-Laser-Videoprojecteur-1200-ISO-Lumens-avec-Licence-systeme-Google-TV/a20510486/w-4?Origin=SEA_GOOGLE_FL_TV",
  },
  {
    id: 3,
    badge: "/projecteur-lp/badge-3.png",
    name: "LG CineBeam Q",
    price: "$869",
    grade: "B",
    productImage: "/projecteur-lp/product-lg.png",
    scoreImage: "/projecteur-lp/scores-top4.png",
    ratingLabel: "Overall Rating",
    ratingImage: "/projecteur-lp/rating-8-7.png",
    advantages: [
      "✅ 4K image with RGB laser source",
      "✅ Simple place-and-play setup",
      "✅ Compact, stylish, and well designed",
      "✅ Low input lag mode",
    ],
    disadvantages: [
      "❌ Brightness is limited in ambient light",
      "❌ 4K support is not ideal for every use case",
      "❌ Weak mono speaker",
      "❌ High price for an ultra-portable projector",
      "❌ Remote control is not very convenient",
    ],
    url: "https://www.darty.com/nav/achat/hifi_video/videoprojecteur-videoprojecteur/videoprojecteur_cinema/lg_hu710pb.html?ofmp=1050911565&dartycid=sem_free-listing_MP-tv--video--home-cinema_videoprojection",
  },
  {
    id: 4,
    badge: "/projecteur-lp/badge-4.png",
    name: "Formovie Xming Page One",
    price: "$429",
    grade: "B",
    productImage: "/projecteur-lp/product-formovie.png",
    scoreImage: "/projecteur-lp/scores-top5.png",
    ratingLabel: "Overall Rating",
    ratingImage: "/projecteur-lp/rating-8-3.png",
    advantages: [
      "✅ Compact and easy to set up",
      "✅ Smooth motion handling",
      "✅ Google TV and Netflix built in",
    ],
    disadvantages: [
      "❌ Black levels and contrast are modest",
      "❌ Input lag",
      "❌ Color calibration needs work",
      "❌ Noticeable noise levels",
      "❌ Some light leakage",
    ],
    url: "https://www.boulanger.com/ref/9000688718",
  },
  {
    id: 5,
    badge: "/projecteur-lp/badge-5.png",
    name: "BenQ MW560 WXGA DLP",
    price: "$419",
    grade: "B-",
    productImage: "/projecteur-lp/product-benq.jpg",
    scoreImage: "/projecteur-lp/scores-top3.png",
    ratingLabel: "Overall Rating",
    ratingImage: "/projecteur-lp/rating-7-8.png",
    advantages: [
      "✅ Full HD 1080p definition",
      "✅ Image size from about 3 ft to 10 ft",
      "✅ Automatic correction",
    ],
    disadvantages: [
      "❌ Brightness limitations",
      "❌ Black-level performance is modest",
      "❌ Limited zoom and lens shift",
      "❌ Higher power consumption",
    ],
    url: "https://www.fnac.com/mp47005776/BenQ-MW560-Projecteur-DLP-portable-3D-4000-ANSI-lumens-WXGA-1280-x-800-16-10-720p/w-4?oref=8d524139-d707-e0fb-8ddf-32bb2a6dc90a&Origin=CMP_GOOGLE_FL_TV",
  },
];

export default function EnglishHomePage() {
  return (
    <ComparisonPage
      frenchPath="/"
      englishPath="/en"
      title="5 Best Projectors Tested in 2026"
      subtitle="We tested more than 30 models to identify the 5 best projectors..."
      authorBio="David, 34, is an engineer by training who loves turning movie nights into a true theater-style experience. He looks for devices that are powerful, simple to use, and practical in real homes."
      updatedAt="February 26, 2026"
      scrollLabel="↓ Skip to the ranking ↓"
      heroImage="/projecteur-lp/hero-projector.jpg"
      heroAlt="Home theater projector setup"
      introParagraphs={introParagraphs}
      criteriaTitle="What to look for"
      criteriaList={criteriaList}
      avoidTitle="What to avoid:"
      avoidList={avoidList}
      preRankingText="After months of testing different models, from portable mini projectors to fuller home theater setups, I narrowed the list to the 2026 projectors that are actually worth your attention."
      rankingTitle="The 5 Best Projectors of 2026"
      products={products}
      productCtaLabel="Check current price"
    />
  );
}
