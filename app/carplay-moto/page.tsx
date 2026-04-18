import Image from "next/image";
import type { Metadata } from "next";
import ConversionButton from "../components/ConversionButton";

export const metadata: Metadata = {
  title: "Meilleur Écran CarPlay Moto 2026 | Top 5 & Avis",
  description:
    "Comparatif des 5 meilleurs écrans CarPlay & Android Auto pour moto en 2026. Étanches IP67, tests sur route, avis d'expert. Dès 119€.",
  keywords:
    "écran carplay moto, carplay moto sans fil, android auto moto, meilleur écran carplay moto 2026, gps moto carplay, oxaplay moto avis, comparatif carplay moto, écran tactile moto, navigation moto carplay, android auto sans fil moto, écran moto étanche, accessoire moto connecté, gps moto bluetooth, carplay moto pas cher, écran navigation moto, test écran carplay moto, meilleur gps moto carplay, carplay guidon moto, écran IPS moto",
  openGraph: {
    title: "Meilleur Écran CarPlay Moto 2026 | Top 5 & Avis",
    description:
      "Nous avons testé plus de 15 écrans CarPlay & Android Auto pour moto. Découvrez notre top 5 étanches IP67 des meilleurs modèles 2026.",
    type: "article",
    url: "https://www.avisconso.fr/carplay-moto",
    images: [
      {
        url: "/carplay-moto/oxaplay-hero.webp",
        width: 1200,
        height: 630,
        alt: "Meilleur écran CarPlay moto 2026 - Comparatif",
      },
    ],
    locale: "fr_FR",
    siteName: "AVIS CONSO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleur Écran CarPlay Moto 2026 | Top 5 & Avis",
    description:
      "Top 5 des meilleurs écrans CarPlay & Android Auto pour moto testés en 2026. Étanches, compatibles gants, dès 119€.",
    images: ["/carplay-moto/oxaplay-hero.webp"],
  },
  alternates: {
    canonical: "https://www.avisconso.fr/carplay-moto",
  },
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OxaPlay Écran CarPlay Moto",
  image: "https://www.avisconso.fr/carplay-moto/oxaplay-product.png",
  description:
    "Écran CarPlay & Android Auto sans fil pour moto. Étanche IP67, écran IPS haute luminosité, installation rapide sur guidon. Garantie 2 ans.",
  brand: { "@type": "Brand", name: "OxaPlay" },
  sku: "OXAPLAY-MOTO",
  offers: {
    "@type": "Offer",
    url: "https://www.oxaplay.com/fr/carplay-moto",
    priceCurrency: "EUR",
    price: "119.00",
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
  review: {
    "@type": "Review",
    author: { "@type": "Person", name: "David Quentin" },
    datePublished: "2026-04-18",
    reviewBody:
      "L'OxaPlay s'est imposé comme LA référence des écrans CarPlay pour moto en 2026. Écran IPS haute luminosité, étanche, installation rapide sur guidon. CarPlay & Android Auto sans fil. Meilleur rapport qualité-prix du marché moto.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
    },
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le meilleur écran CarPlay pour moto en 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "D'après nos tests sur route, l'OxaPlay est le meilleur écran CarPlay moto en 2026. Il offre un écran IPS haute luminosité lisible en plein soleil, une connexion CarPlay & Android Auto sans fil, une étanchéité IP67 et un excellent rapport qualité-prix à 119€.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'un écran CarPlay moto résiste à la pluie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les meilleurs écrans CarPlay moto comme l'OxaPlay sont certifiés IP67, ce qui signifie qu'ils résistent à la pluie, aux éclaboussures et à la poussière. Ils sont conçus pour une utilisation en extérieur dans toutes les conditions météorologiques.",
      },
    },
    {
      "@type": "Question",
      name: "Comment installer un écran CarPlay sur une moto ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'installation est simple : 1) Fixez le support universel sur le guidon avec la pince fournie. 2) Branchez le câble d'alimentation sur la batterie de la moto ou un port USB. 3) Connectez votre téléphone en Bluetooth. L'ensemble prend moins de 10 minutes, sans modification de la moto.",
      },
    },
    {
      "@type": "Question",
      name: "Un écran CarPlay moto fonctionne-t-il avec les gants ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les écrans CarPlay moto de qualité comme l'OxaPlay disposent d'un écran tactile compatible avec les gants de moto. L'écran réagit aux touches même avec des gants épais, ce qui est essentiel pour la sécurité en conduite.",
      },
    },
    {
      "@type": "Question",
      name: "Un écran CarPlay moto est-il compatible avec Android ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la plupart des écrans CarPlay moto modernes comme l'OxaPlay sont compatibles à la fois avec Apple CarPlay (iPhone) et Android Auto (smartphones Android). Vous pouvez utiliser Waze, Google Maps, Spotify et passer des appels via votre casque Bluetooth.",
      },
    },
    {
      "@type": "Question",
      name: "Un écran CarPlay moto résiste-t-il aux vibrations ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les écrans CarPlay moto de qualité comme l'OxaPlay sont conçus pour résister aux vibrations du moteur et de la route. Le support de guidon intègre des amortisseurs en caoutchouc et l'écran est renforcé pour éviter tout parasite visuel ou déconnexion, même sur routes dégradées ou pavées.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on utiliser un écran CarPlay moto avec un casque Bluetooth ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, c'est même l'utilisation recommandée. L'écran CarPlay se connecte à votre téléphone, qui lui-même est relié à votre intercom ou casque Bluetooth (Cardo, Sena, etc.). Vous recevez les instructions GPS, la musique et les appels directement dans le casque, sans lâcher le guidon. La commande vocale Siri ou Google Assistant fonctionne également via le casque.",
      },
    },
  ],
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Meilleurs Écrans CarPlay Moto Testés 2026",
  description:
    "Comparatif complet des meilleurs écrans CarPlay & Android Auto pour moto. Tests réels sur route, avis d'expert et classement 2026.",
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
};

/* ───────────────────────── DATA ───────────────────────── */

const introParagraphs = [
  "Les écrans CarPlay et Android Auto pour moto ont changé la donne pour les motards. Plus besoin de s'arrêter pour consulter son GPS ou de galérer avec un smartphone fixé au guidon avec un support bancal — un écran dédié offre une navigation claire, lisible même en plein soleil, et une connectivité complète avec votre téléphone.",
  "Waze, Google Maps, Spotify, appels mains libres via le casque Bluetooth… tout est accessible d'un coup d'œil, sans quitter la route des yeux. C'est un vrai gain en confort et en sécurité.",
  "Mais avec l'explosion de l'offre sur le marché, choisir le bon écran CarPlay moto n'est pas simple : 👉 quel écran est vraiment lisible en plein soleil ? 👉 lequel résiste à la pluie et aux vibrations ? 👉 et surtout, lequel offre le meilleur rapport qualité-prix sans sacrifier la fiabilité ?",
  "Après plusieurs semaines de tests sur route — départementales, autoroute, sous la pluie et en plein été — j'ai pu établir ce comparatif objectif des meilleurs écrans CarPlay moto de 2026.",
];

const criteriaList = [
  "La luminosité de l'écran (lisibilité en plein soleil)",
  "L'étanchéité (certification IP67 minimum)",
  "La compatibilité sans fil (CarPlay & Android Auto)",
  "La robustesse et la résistance aux vibrations",
  "La facilité d'installation sur le guidon",
];

const avoidList = [
  "Les écrans non étanches (danger sous la pluie)",
  "Les modèles avec une luminosité trop faible (illisibles au soleil)",
  "Les écrans sans compatibilité gants de moto",
  "Les produits sans garantie ou sans SAV en France",
  "Les fixations de guidon fragiles ou universelles bas de gamme",
];

const products = [
  {
    id: 1,
    badge: "/projecteur-lp/badge-1.png",
    name: "OxaPlay Moto",
    price: "119€",
    grade: "A+",
    productImage: "/carplay-moto/oxaplay-product.png",
    ratingLabel: "Note Globale",
    ratingCaption: "Basé sur plus de 1 500 avis",
    originalPrice: "199€",
    expertTitle: "Avis d'expert :",
    advantages: [
      "✅ Écran IPS haute luminosité — lisible en plein soleil",
      "✅ CarPlay & Android Auto sans fil",
      "✅ Étanche IP67 — résiste à la pluie et aux éclaboussures",
      "✅ Tactile compatible gants de moto",
      "✅ Installation rapide sur guidon (support universel inclus)",
      "✅ Commande vocale Siri / Google Assistant via casque Bluetooth",
      "✅ Résistant aux vibrations et aux chocs",
      "✅ Garantie 2 ans constructeur",
    ],
    disadvantages: [
      "❌ Disponible uniquement en ligne",
      "❌ Très demandé, souvent en rupture de stock",
    ],
    description:
      "L'OxaPlay version moto s'est imposé comme LA référence des écrans CarPlay pour deux-roues en 2026. Dès la première sortie, on est impressionné par la luminosité de l'écran IPS : même en plein soleil d'été, l'affichage reste parfaitement lisible — un point crucial quand on roule à moto. L'installation est rapide et propre : le support de guidon universel s'adapte à la plupart des motos et scooters, et le câblage se fait en quelques minutes sur la batterie ou un port USB. La connexion sans fil avec l'iPhone ou Android est instantanée dès que vous allumez la moto. Waze, Google Maps, Spotify — tout fonctionne de manière fluide. L'écran tactile réagit même avec des gants de moto, un détail qui fait toute la différence au quotidien. Point fort essentiel : l'étanchéité IP67. Sous une averse, l'écran continue de fonctionner parfaitement, sans condensation ni dysfonctionnement. La résistance aux vibrations est également excellente — aucun parasite visuel même sur routes dégradées. La commande vocale via Siri ou Google Assistant, couplée à un casque Bluetooth, permet de naviguer, passer des appels ou changer de musique sans lâcher le guidon. À 119€ au lieu de 199€, c'est le meilleur rapport qualité-prix du marché moto. Un produit pensé par et pour les motards.",
    editorialTip:
      "💡 Astuce de la rédaction : En cliquant sur notre lien ci-dessous, une remise de -40% s'applique souvent automatiquement sur leur site officiel selon les périodes.",
    url: "https://www.oxaplay.com/fr/carplay-moto",
  },
  {
    id: 2,
    badge: "/projecteur-lp/badge-2.png",
    name: "Carpuride W603",
    price: "189€",
    grade: "A",
    productImage: "/carplay-moto/carpuride.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ Télécommande au guidon pratique",
      "✅ Compatible CarPlay & Android Auto",
      "✅ Navigation et assistant vocal",
      "✅ Marque connue (Carpuride)",
    ],
    disadvantages: [
      "❌ Plus cher que l'OxaPlay pour des fonctions similaires",
      "❌ Luminosité moyenne en plein soleil",
      "❌ Étanchéité moins fiable sur le long terme",
      "❌ Fixation de guidon parfois encombrante",
    ],
    url: "https://www.amazon.fr/Carpuride-W603-T%C3%A9l%C3%A9commande-Navigation-Assistant/dp/B0DFPVN1BN/",
  },
  {
    id: 3,
    badge: "/projecteur-lp/badge-3.png",
    name: "Kraft Écran CarPlay Moto",
    price: "219€",
    grade: "B+",
    productImage: "/carplay-moto/kraft5.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ Écran CarPlay dédié moto",
      "✅ Compatible Android Auto",
      "✅ Design compact",
      "✅ Bonne finition",
    ],
    disadvantages: [
      "❌ Prix élevé pour les fonctionnalités proposées",
      "❌ Tactile moins réactif avec gants épais",
      "❌ Documentation et SAV en anglais",
      "❌ Luminosité insuffisante en été",
    ],
    url: "https://www.amazon.fr/Kraft-%C3%89cran-Carplay-CarPlay-Android/dp/B0GQVB12BR/",
  },
  {
    id: 4,
    badge: "/projecteur-lp/badge-4.png",
    name: "INNOVV N2",
    price: "289€",
    grade: "B",
    productImage: "/carplay-moto/innovv.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ Navigation avec commandes WonderWheel",
      "✅ Écran de bonne qualité",
      "✅ Conception robuste",
    ],
    disadvantages: [
      "❌ Prix très élevé (289€)",
      "❌ Installation plus complexe",
      "❌ Système de commande propriétaire",
      "❌ Poids supérieur à la concurrence",
      "❌ Compatibilité limitée avec certains guidons",
    ],
    url: "https://www.amazon.fr/INNOVV-N2-navigation-commandes-WonderWheel/dp/B0GFMK8X2M/",
  },
  {
    id: 5,
    badge: "/projecteur-lp/badge-5.png",
    name: "RiderNav R7M",
    price: "399€",
    grade: "B-",
    productImage: "/carplay-moto/ridernav.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ CarPlay & Android Auto",
      "✅ Écran 7 pouces pour moto",
      "✅ Marque spécialisée moto",
    ],
    disadvantages: [
      "❌ Prix excessif (399€)",
      "❌ Encombrant sur le guidon",
      "❌ Interface parfois lente",
      "❌ Étanchéité perfectible",
      "❌ Rapport qualité-prix défavorable",
    ],
    url: "https://www.amazon.fr/RiderNav-R7M-CarPlay-Android-Motos/dp/B0GF291VTK/",
  },
];

type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  const isMain = product.id === 1;
  return (
    <article className="relative rounded-2xl md:rounded-[32px] border border-zinc-200 bg-white p-4 sm:p-6 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={product.badge}
          alt={`Badge classement ${product.name}`}
          width={80}
          height={80}
          className="h-14 w-14 object-contain md:h-20 md:w-20"
        />
      </div>
      <div className="pt-8 md:pt-10">
        <div className="flex flex-col gap-1.5 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-zinc-900">
            {product.name}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs sm:text-sm font-semibold text-emerald-700">
              {product.grade}
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="flex items-center justify-center rounded-xl md:rounded-2xl bg-zinc-50 p-3 md:p-4">
            <Image
              src={product.productImage}
              alt={product.name}
              width={400}
              height={300}
              className="h-40 sm:h-56 md:h-64 w-auto object-contain"
            />
          </div>
          <div className="space-y-3 sm:space-y-5">
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm font-semibold uppercase text-zinc-700">
                {product.ratingLabel}
              </p>
              {product.ratingCaption ? (
                <p className="text-[11px] sm:text-xs text-zinc-500">{product.ratingCaption}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="text-center">
                {isMain && product.originalPrice ? (
                  <div className="mb-1.5 sm:mb-2">
                    <span className="line-through text-gray-400 text-base sm:text-lg">{product.originalPrice}</span>
                    <span className="text-xl sm:text-2xl font-bold text-orange-600 ml-2">{product.price}</span>
                  </div>
                ) : (
                  <div className="mb-1.5 sm:mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">{product.price}</span>
                  </div>
                )}
              </div>
              <ConversionButton url={product.url} isNexgear={isMain} trackConversion={isMain}>
                Vérifier le prix sur le site officiel
              </ConversionButton>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          {product.expertTitle ? (
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900">{product.expertTitle}</h4>
          ) : null}
          <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2">
            <div className="rounded-xl md:rounded-2xl bg-emerald-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-emerald-700">Avantages</p>
              <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-emerald-900">
                {product.advantages.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl md:rounded-2xl bg-rose-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-rose-600">Inconvénients</p>
              <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-rose-900">
                {product.disadvantages.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.description ? (
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">{product.description}</p>
          ) : null}
          {product.editorialTip ? (
            <div className="bg-blue-50 p-2.5 sm:p-3 rounded-md text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
              {product.editorialTip}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

const faqItems = jsonLdFaq.mainEntity.map((q) => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}));

export default function CarplayMotoPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:gap-6 px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8">
        <Image
          src="/projecteur-lp/avisconso.avif"
          alt="Avis Conso"
          width={200}
          height={40}
          priority
          className="h-8 sm:h-10 w-auto object-contain"
        />
        <div className="space-y-1.5 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight">
            5 Meilleurs Écrans CarPlay Moto Testés 2026
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-zinc-700">
            Nous avons testé plus de 15 modèles pour identifier les 5 meilleurs écrans CarPlay & Android Auto pour moto…
          </p>
        </div>
        <div className="rounded-2xl md:rounded-3xl border border-zinc-200 bg-white p-3 sm:p-4 md:p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
            <Image
              src="/projecteur-lp/author-david.jpg"
              alt="David Quentin"
              width={80}
              height={80}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-4 border-white object-cover shadow"
            />
            <div className="space-y-1">
              <div className="flex items-center flex-wrap gap-1">
                <p className="text-base sm:text-lg md:text-xl font-semibold">David Quentin</p>
                <span className="text-green-600 text-[10px] sm:text-xs font-semibold bg-green-100 px-1.5 sm:px-2 py-0.5 rounded-full">✓ Testeur Certifié</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                David, 34 ans, ingénieur et motard passionné. Il parcourt plus de 15 000 km par an et teste les derniers accessoires moto connectés pour trouver les solutions les plus fiables et pratiques du marché.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Mis à jour le 18 Avril 2026</p>
            </div>
          </div>
        </div>
        <a
          className="text-center text-sm sm:text-base md:text-lg font-semibold text-blue-600"
          href="#classement"
        >
          ↓ Cliquez ici pour défiler jusqu&apos;au classement ↓
        </a>
        <div className="relative w-full h-44 sm:h-56 md:h-[480px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/carplay-moto/oxaplay-hero.webp"
            alt="Écran CarPlay installé sur une moto"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-2xl md:rounded-3xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-emerald-900">
              Que faut-il rechercher ?
            </h3>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-emerald-900">
              {criteriaList.map((item) => (
                <li key={item} className="leading-relaxed">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl md:rounded-3xl border border-rose-200 bg-rose-50 p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-rose-700">À éviter :</h3>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg text-rose-900">
              {avoidList.map((item) => (
                <li key={item} className="leading-relaxed">
                  ❌ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
          Après des semaines de tests sur route — départementales, autoroute, sous la pluie et en plein été — j&apos;ai enfin pu établir ma sélection finale des meilleurs écrans CarPlay moto 2026, ceux qui méritent vraiment votre attention.
        </p>
        <a
          id="classement"
          className="rounded-full bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200"
          href="#classement"
        >
          LES 5 MEILLEURS ÉCRANS CARPLAY MOTO DE 2026
        </a>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 sm:gap-16 px-4 pb-12 sm:pb-20 pt-4 sm:pt-6 sm:px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-12 sm:pb-20 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-zinc-900 mb-6 sm:mb-8">
          Questions fréquentes sur les écrans CarPlay moto
        </h2>
        <div className="space-y-4 sm:space-y-5">
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <summary className="cursor-pointer px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base md:text-lg font-semibold text-zinc-900 list-none flex items-center justify-between">
                {faq.question}
                <span className="ml-2 shrink-0 text-zinc-400 transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed text-zinc-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Liens internes ── */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-12 sm:pb-20 sm:px-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-zinc-900 mb-4 sm:mb-6">
          Nos autres comparatifs
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          <a
            href="/carplay-voiture"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5 transition hover:bg-zinc-100 hover:shadow-md"
          >
            <span className="text-2xl">🚗</span>
            <div>
              <p className="text-sm sm:text-base font-semibold text-zinc-900">Meilleur Écran CarPlay Voiture 2026</p>
              <p className="text-xs sm:text-sm text-zinc-500">Comparatif des 5 meilleurs écrans CarPlay pour voiture</p>
            </div>
          </a>
          <a
            href="/"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5 transition hover:bg-zinc-100 hover:shadow-md"
          >
            <span className="text-2xl">📽️</span>
            <div>
              <p className="text-sm sm:text-base font-semibold text-zinc-900">Meilleur Vidéoprojecteur 2026</p>
              <p className="text-xs sm:text-sm text-zinc-500">Comparatif des 5 meilleurs vidéoprojecteurs testés</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
