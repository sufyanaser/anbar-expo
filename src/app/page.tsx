export default function HomePage() {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#161412] px-6 py-16 text-[#f4efe7]">
      <div
        className="absolute inset-0 -z-10 opacity-35"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#9b5236]/10 blur-3xl"
        aria-hidden="true"
      />
      <section
        className="w-full max-w-2xl text-center"
        aria-labelledby="site-title"
      >
        <p className="font-latin text-xs font-semibold tracking-[0.34em] text-[#c68a6d]">
          ANBAR EXPO
        </p>
        <h1 id="site-title" className="mt-7 text-3xl font-black sm:text-5xl">
          الموقع قيد الإعداد
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-8 text-white/55 sm:text-base">
          سيتم الإعلان عن التفاصيل الرسمية في الوقت المناسب.
        </p>
        <div
          className="mx-auto mt-12 h-px w-16 bg-[#c68a6d]/55"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
