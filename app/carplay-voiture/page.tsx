import Image from "next/image";
import type { Metadata } from "next";
import ConversionButton from "../components/ConversionButton";

export const metadata: Metadata = {
  title: "Meilleur Écran CarPlay Voiture 2026 | Comparatif & Avis",
  description:
    "Comparatif des 5 meilleurs écrans CarPlay & Android Auto pour voiture en 2026. Tests réels, avis d'expert et guide d'achat complet. Dès 119€.",
  keywords:
    "écran carplay voiture, carplay sans fil, android auto écran, meilleur écran carplay 2026, écran carplay portable, oxaplay avis, comparatif carplay voiture, écran tactile voiture, carplay universel, android auto sans fil voiture, écran carplay 10 pouces, accessoire voiture connectée, autoradio carplay, carplay pas cher, écran navigation voiture, test écran carplay, meilleur carplay portable, carplay aftermarket, écran IPS voiture",
  openGraph: {
    title: "Meilleur Écran CarPlay Voiture 2026 | Comparatif & Avis",
    description:
      "Nous avons testé plus de 20 écrans CarPlay & Android Auto. Découvrez notre top 5 des meilleurs modèles 2026 avec avis d'experts.",
    type: "article",
    url: "https://www.avisconso.fr/carplay-voiture",
    images: [
      {
        url: "/carplay-voiture/oxaplay-hero.webp",
        width: 1200,
        height: 630,
        alt: "Meilleur écran CarPlay voiture 2026 - Comparatif",
      },
    ],
    locale: "fr_FR",
    siteName: "AVIS CONSO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleur Écran CarPlay Voiture 2026 | Comparatif & Avis",
    description:
      "Top 5 des meilleurs écrans CarPlay & Android Auto testés en 2026. Guide d'achat complet dès 119€.",
    images: ["/carplay-voiture/oxaplay-hero.webp"],
  },
  alternates: {
    canonical: "https://www.avisconso.fr/carplay-voiture",
  },
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OxaPlay Écran CarPlay Voiture 10.26\"",
  image: "https://www.avisconso.fr/carplay-voiture/oxaplay-product.jpg",
  description:
    "Écran CarPlay & Android Auto sans fil HD 10.26\" pour voiture. Installation en 2 minutes, compatible avec 99% des véhicules. Garantie 2 ans.",
  brand: { "@type": "Brand", name: "OxaPlay" },
  sku: "OXAPLAY-1026",
  offers: {
    "@type": "Offer",
    url: "https://www.oxaplay.com/fr/carplay-voiture",
    priceCurrency: "EUR",
    price: "119.00",
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
  review: {
    "@type": "Review",
    author: { "@type": "Person", name: "David Quentin" },
    datePublished: "2026-04-15",
    reviewBody:
      "L'OxaPlay s'est imposé comme LA référence des écrans CarPlay portables en 2026. Écran IPS 10.26 pouces de qualité, installation en 2 minutes, CarPlay & Android Auto sans fil. Meilleur rapport qualité-prix du marché.",
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
      name: "Quel est le meilleur écran CarPlay pour voiture en 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "D'après nos tests, l'OxaPlay 10.26\" est le meilleur écran CarPlay voiture en 2026. Il offre un écran IPS HD de 10.26 pouces, une connexion CarPlay & Android Auto sans fil, une installation en 2 minutes et un excellent rapport qualité-prix à 119€.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'un écran CarPlay portable fonctionne avec toutes les voitures ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les écrans CarPlay portables comme l'OxaPlay sont compatibles avec plus de 99% des véhicules. Ils se branchent simplement sur la prise allume-cigare et se fixent au tableau de bord avec un support universel. Aucune modification du véhicule n'est nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre CarPlay filaire et sans fil ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le CarPlay filaire nécessite de brancher votre iPhone avec un câble Lightning ou USB-C à chaque trajet. Le CarPlay sans fil se connecte automatiquement via Bluetooth et Wi-Fi dès que vous montez en voiture, sans aucun câble. Les écrans sans fil comme l'OxaPlay offrent un confort d'utilisation nettement supérieur.",
      },
    },
    {
      "@type": "Question",
      name: "Comment installer un écran CarPlay dans sa voiture ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'installation est très simple : 1) Fixez le support universel sur votre tableau de bord. 2) Branchez le câble d'alimentation sur la prise allume-cigare. 3) Allumez l'écran et connectez votre téléphone en Bluetooth. L'ensemble prend moins de 2 minutes, sans outils ni câblage complexe.",
      },
    },
    {
      "@type": "Question",
      name: "Un écran CarPlay portable est-il compatible avec Android ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la plupart des écrans CarPlay portables modernes comme l'OxaPlay sont compatibles à la fois avec Apple CarPlay (iPhone) et Android Auto (smartphones Android). Vous pouvez utiliser Waze, Spotify, Google Maps, Apple Music et passer des appels mains libres quel que soit votre téléphone.",
      },
    },
  ],
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Meilleurs Écrans CarPlay Voiture Testés 2026",
  description:
    "Comparatif complet des meilleurs écrans CarPlay & Android Auto pour voiture. Tests réels, avis d'expert et classement 2026.",
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
};

/* ───────────────────────── DATA ───────────────────────── */

const introParagraphs = [
  "Les écrans CarPlay et Android Auto portables ont révolutionné la conduite ces dernières années. Plus besoin de changer d'autoradio ou de faire appel à un installateur : il suffit de poser un écran sur son tableau de bord, de le brancher sur l'allume-cigare et de connecter son téléphone — en quelques secondes, votre voiture devient un véhicule connecté.",
  "Waze, Spotify, Apple Music, appels mains libres, messages vocaux… tout est accessible d'un simple geste, sur un écran tactile large et lisible. C'est pratique, sécurisant, et surtout très abordable comparé à un système embarqué d'origine.",
  "Mais face à l'explosion de l'offre sur le marché, une question revient sans cesse : 👉 quel écran CarPlay choisir ? 👉 quels sont les vrais critères de qualité ? 👉 et surtout, lequel offre le meilleur rapport qualité-prix sans sacrifier la fiabilité ?",
  "Après plusieurs semaines de tests intensifs — en conditions réelles de conduite, de jour comme de nuit, sur autoroute et en ville — j'ai pu établir ce comparatif objectif pour vous aider à faire le bon choix.",
];

const criteriaList = [
  "La taille et la qualité de l'écran (IPS, résolution, luminosité)",
  "La connectivité sans fil (CarPlay & Android Auto)",
  "La compatibilité universelle (tous véhicules)",
  "La facilité d'installation (plug & play)",
  "Le son intégré et les options audio (AUX, FM, Bluetooth)",
];

const avoidList = [
  "Les écrans de moins de 7 pouces (trop petits pour la navigation)",
  "Les modèles uniquement filaires (câble obligatoire à chaque trajet)",
  "Les écrans sans support caméra de recul",
  "Les produits sans garantie ou sans SAV en France",
  "Les interfaces lentes ou mal optimisées",
];

const products = [
  {
    id: 1,
    badge: "/projecteur-lp/badge-1.png",
    name: "OxaPlay 10.26\"",
    price: "119€",
    grade: "A+",
    productImage: "/carplay-voiture/oxaplay-product.jpg",
    ratingLabel: "Note Globale",
    ratingCaption: "Basé sur plus de 2 000 avis",
    originalPrice: "199€",
    expertTitle: "Avis d'expert :",
    advantages: [
      "✅ Écran IPS HD 10.26\" — le plus grand de sa catégorie",
      "✅ CarPlay & Android Auto sans fil",
      "✅ Installation en 2 minutes chrono (plug & play)",
      "✅ Compatible caméra de recul avec basculement automatique",
      "✅ Commande vocale Siri / Google Assistant",
      "✅ Son intégré + sortie AUX et FM",
      "✅ Compatible avec 99% des véhicules",
      "✅ Garantie 2 ans constructeur",
    ],
    disadvantages: [
      "❌ Disponible uniquement en ligne",
      "❌ Très demandé, souvent en rupture de stock",
    ],
    description:
      "L'OxaPlay s'est imposé comme LA référence des écrans CarPlay portables en 2026. Dès la première utilisation, on est frappé par la qualité de l'écran IPS de 10.26 pouces : les couleurs sont vives, la luminosité est parfaitement adaptée (même en plein soleil), et la résolution de 1600×600 pixels offre un confort visuel remarquable pour la navigation et le multimédia. L'installation est d'une simplicité déconcertante : on pose l'écran sur le support universel, on branche l'allume-cigare, et c'est parti. La connexion sans fil avec l'iPhone ou Android se fait en quelques secondes. Waze, Spotify, Apple Music, appels — tout fonctionne de manière fluide et réactive. Le tactile multi-points réagit aussi bien que celui d'un smartphone. Point fort souvent négligé : la compatibilité avec une caméra de recul. L'écran bascule automatiquement dès que vous passez la marche arrière, un vrai plus pour la sécurité. Côté audio, le haut-parleur intégré est correct, mais on apprécie surtout la possibilité de diffuser le son sur les enceintes de la voiture via AUX ou FM. La commande vocale (Siri ou Google Assistant) permet de garder les mains sur le volant en toute sécurité. À 119€ au lieu de 199€, c'est tout simplement le meilleur rapport qualité-prix du marché. Un produit complet, fiable, et pensé pour le quotidien.",
    editorialTip:
      "💡 Astuce de la rédaction : En cliquant sur notre lien ci-dessous, une remise de -40% s'applique souvent automatiquement sur leur site officiel selon les périodes.",
    url: "https://www.oxaplay.com/fr/carplay-voiture",
  },
  {
    id: 2,
    badge: "/projecteur-lp/badge-2.png",
    name: "AWESAFE Autoradio CarPlay",
    price: "269€",
    grade: "A",
    productImage: "/carplay-voiture/awesafe.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ Écran tactile 7\" de bonne qualité",
      "✅ Compatible CarPlay & Android Auto",
      "✅ Bluetooth intégré",
      "✅ Bonne connectivité (USB, AUX)",
    ],
    disadvantages: [
      "❌ Installation complexe (remplacement autoradio)",
      "❌ Nécessite un véhicule compatible DIN",
      "❌ Écran plus petit que la concurrence (7\")",
      "❌ Pas de connexion sans fil CarPlay",
    ],
    url: "https://www.amazon.fr/AWESAFE-Autoradio-Tactile-compatibles-Bluetooth/dp/B0FH67L13H/",
  },
  {
    id: 3,
    badge: "/projecteur-lp/badge-3.png",
    name: "URVOLAX Caméra + Écran",
    price: "259€",
    grade: "B+",
    productImage: "/carplay-voiture/urvolax.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ Caméra de recul sans fil incluse",
      "✅ Écran CarPlay compatible",
      "✅ Installation sans fil",
      "✅ Bon rapport qualité-prix",
    ],
    disadvantages: [
      "❌ Qualité d'écran inférieure (résolution limitée)",
      "❌ Interface moins réactive",
      "❌ Caméra de qualité moyenne en basse lumière",
      "❌ SAV et documentation en anglais",
    ],
    url: "https://www.amazon.fr/URVOLAX-Camera-Recul-sans-Fil/dp/B0FD3MGCTJ/",
  },
  {
    id: 4,
    badge: "/projecteur-lp/badge-4.png",
    name: "CarpodGo T3 Pro",
    price: "231€",
    grade: "B",
    productImage: "/carplay-voiture/carpodgo.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ CarPlay entièrement sans fil",
      "✅ Design compact",
      "✅ Prix attractif",
    ],
    disadvantages: [
      "❌ Écran de taille réduite",
      "❌ Luminosité insuffisante en plein soleil",
      "❌ Qualité de fabrication moyenne",
      "❌ Bluetooth parfois instable",
      "❌ Pas de support caméra de recul",
    ],
    url: "https://www.amazon.fr/enti%C3%A8rement-CarpodGo-T3-Pro-supportant/dp/B0D8W377G2/",
  },
  {
    id: 5,
    badge: "/projecteur-lp/badge-5.png",
    name: "Carpuride W602BS Pro",
    price: "359€",
    grade: "B-",
    productImage: "/carplay-voiture/carpuride.jpg",
    ratingLabel: "Note Globale",
    advantages: [
      "✅ Bluetooth & interphone intégrés",
      "✅ CarPlay & Android Auto",
      "✅ Marque connue (Carpuride)",
    ],
    disadvantages: [
      "❌ Écran de taille moyenne",
      "❌ Interface parfois lente",
      "❌ Qualité audio du haut-parleur limitée",
      "❌ Fixation du support peu solide",
      "❌ Chauffe après usage prolongé",
    ],
    url: "https://www.amazon.fr/Carpuride-W602BS-Pro-Bluetooth-Interphone/dp/B0FV35DR9D/",
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

export default function CarplayVoiturePage() {
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
            5 Meilleurs Écrans CarPlay Voiture Testés 2026
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-zinc-700">
            Nous avons testé plus de 20 modèles pour identifier les 5 meilleurs écrans CarPlay & Android Auto…
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
                David, 34 ans, ingénieur de formation et passionné d&apos;automobile. Il passe son temps à tester les derniers gadgets auto pour trouver les solutions les plus pratiques et fiables du marché.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Mis à jour le 15 Avril 2026</p>
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
            src="/carplay-voiture/oxaplay-hero.webp"
            alt="Écran CarPlay installé dans une voiture"
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
          Après des semaines de tests en conditions réelles — sur autoroute, en ville, de jour comme de nuit — j&apos;ai enfin pu établir ma sélection finale des meilleurs écrans CarPlay voiture 2026, ceux qui méritent vraiment votre attention.
        </p>
        <a
          id="classement"
          className="rounded-full bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200"
          href="#classement"
        >
          LES 5 MEILLEURS ÉCRANS CARPLAY DE 2026
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
          Questions fréquentes sur les écrans CarPlay voiture
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
    </main>
  );
}
