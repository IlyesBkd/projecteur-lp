import Image from "next/image";

import ConversionButton from "../components/ConversionButton";
import LanguageSwitcher from "../components/LanguageSwitcher";

export interface ProductData {
  id: number;
  badge: string;
  name: string;
  price: string;
  grade: string;
  productImage: string;
  scoreImage?: string;
  ratingImage?: string;
  ratingLabel: string;
  ratingCaption?: string;
  originalPrice?: string;
  expertTitle?: string;
  advantages: string[];
  disadvantages: string[];
  description?: string;
  editorialTip?: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  href: string;
  icon: string;
  title: string;
  description: string;
}

interface ComparisonPageProps {
  frenchPath: string;
  englishPath: string;
  title: string;
  subtitle: string;
  authorBio: string;
  updatedAt: string;
  scrollLabel: string;
  heroImage: string;
  heroAlt: string;
  heroClassName?: string;
  introParagraphs: string[];
  criteriaTitle: string;
  criteriaList: string[];
  avoidTitle: string;
  avoidList: string[];
  preRankingText: string;
  rankingTitle: string;
  products: ProductData[];
  productCtaLabel: string;
  productCurrency?: string;
  structuredData?: object[];
  faqTitle?: string;
  faqItems?: FaqItem[];
  relatedTitle?: string;
  relatedLinks?: RelatedLink[];
}

function ProductCard({
  product,
  productCtaLabel,
  productCurrency,
}: {
  product: ProductData;
  productCtaLabel: string;
  productCurrency: string;
}) {
  const isMain = product.id === 1;

  return (
    <article className="relative rounded-2xl md:rounded-[32px] border border-zinc-200 bg-white p-4 sm:p-6 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={product.badge}
          alt={`Ranking badge for ${product.name}`}
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
            {product.scoreImage ? (
              <Image
                src={product.scoreImage}
                alt={`Scores for ${product.name}`}
                width={500}
                height={150}
                className="w-full max-w-md"
              />
            ) : null}
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm font-semibold uppercase text-zinc-700">
                {product.ratingLabel}
              </p>
              {product.ratingImage ? (
                <Image
                  src={product.ratingImage}
                  alt={`Rating for ${product.name}`}
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
              ) : null}
              {product.ratingCaption ? (
                <p className="text-[11px] sm:text-xs text-zinc-500">
                  {product.ratingCaption}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="text-center">
                {isMain && product.originalPrice ? (
                  <div className="mb-1.5 sm:mb-2">
                    <span className="line-through text-gray-400 text-base sm:text-lg">
                      {product.originalPrice}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-orange-600 ml-2">
                      {product.price}
                    </span>
                  </div>
                ) : (
                  <div className="mb-1.5 sm:mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">
                      {product.price}
                    </span>
                  </div>
                )}
              </div>
              <ConversionButton
                url={product.url}
                isNexgear={isMain}
                trackConversion={isMain}
                currency={productCurrency}
              >
                {productCtaLabel}
              </ConversionButton>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          {product.expertTitle ? (
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900">
              {product.expertTitle}
            </h4>
          ) : null}
          <div className="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2">
            <div className="rounded-xl md:rounded-2xl bg-emerald-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-emerald-700">
                Pros
              </p>
              <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-emerald-900">
                {product.advantages.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl md:rounded-2xl bg-rose-50 p-3 sm:p-4">
              <p className="text-sm sm:text-base font-semibold uppercase text-rose-600">
                Cons
              </p>
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
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-700">
              {product.description}
            </p>
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

export default function ComparisonPage({
  frenchPath,
  englishPath,
  title,
  subtitle,
  authorBio,
  updatedAt,
  scrollLabel,
  heroImage,
  heroAlt,
  heroClassName = "h-44 sm:h-56 md:h-72",
  introParagraphs,
  criteriaTitle,
  criteriaList,
  avoidTitle,
  avoidList,
  preRankingText,
  rankingTitle,
  products,
  productCtaLabel,
  productCurrency = "USD",
  structuredData = [],
  faqTitle,
  faqItems,
  relatedTitle,
  relatedLinks,
}: ComparisonPageProps) {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {structuredData.map((item) => (
        <script
          key={JSON.stringify(item).slice(0, 80)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:gap-6 px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8">
        <Image
          src="/projecteur-lp/avisconso.avif"
          alt="Avis Conso"
          width={200}
          height={40}
          priority
          className="h-8 sm:h-10 w-auto object-contain"
        />
        <LanguageSwitcher
          currentLocale="en"
          frenchPath={frenchPath}
          englishPath={englishPath}
        />
        <div className="max-w-full space-y-1.5 sm:space-y-2">
          <h1 className="max-w-full break-words text-xl min-[420px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight [overflow-wrap:anywhere]">
            {title}
          </h1>
          <p className="max-w-full break-words text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-zinc-700">
            {subtitle}
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
            <div className="min-w-0 space-y-1">
              <div className="flex items-center flex-wrap gap-1">
                <p className="text-base sm:text-lg md:text-xl font-semibold">
                  David Quentin
                </p>
                <span className="text-green-600 text-[10px] sm:text-xs font-semibold bg-green-100 px-1.5 sm:px-2 py-0.5 rounded-full">
                  Verified Tester
                </span>
              </div>
              <p className="max-w-full break-words text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                {authorBio}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Updated {updatedAt}
              </p>
            </div>
          </div>
        </div>
        <a
          className="text-center text-sm sm:text-base md:text-lg font-semibold text-blue-600"
          href="#ranking"
        >
          {scrollLabel}
        </a>
        <div
          className={`relative w-full ${heroClassName} rounded-xl md:rounded-2xl overflow-hidden shadow-lg`}
        >
          <Image
            src={heroImage}
            alt={heroAlt}
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
              {criteriaTitle}
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
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-rose-700">
              {avoidTitle}
            </h3>
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
          {preRankingText}
        </p>
        <a
          id="ranking"
          className="rounded-full bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200"
          href="#ranking"
        >
          {rankingTitle}
        </a>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 sm:gap-16 px-4 pb-12 sm:pb-20 pt-4 sm:pt-6 sm:px-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            productCtaLabel={productCtaLabel}
            productCurrency={productCurrency}
          />
        ))}
      </section>

      {faqTitle && faqItems?.length ? (
        <section className="mx-auto w-full max-w-5xl px-4 pb-12 sm:pb-20 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-zinc-900 mb-6 sm:mb-8">
            {faqTitle}
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
      ) : null}

      {relatedTitle && relatedLinks?.length ? (
        <section className="mx-auto w-full max-w-5xl px-4 pb-12 sm:pb-20 sm:px-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-zinc-900 mb-4 sm:mb-6">
            {relatedTitle}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5 transition hover:bg-zinc-100 hover:shadow-md"
              >
                <span className="text-2xl" aria-hidden="true">
                  {link.icon}
                </span>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-zinc-900">
                    {link.title}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
