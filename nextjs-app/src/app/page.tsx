export default function Home() {
  return (
    <div className="min-h-screen text-slate-100">
      <main className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-12 px-6 py-16 font-sans lg:grid-cols-[minmax(240px,_1fr)_minmax(320px,_1.1fr)_minmax(180px,_0.8fr)] xl:px-12">
        <section className="flex flex-col justify-between gap-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Portfolio
            </p>

          </div>
          
        </section>

        <section className="relative flex flex-col items-center justify-center">
            <span
              className="px-4 z-10 text-9xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500 drop-shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
              style={{ fontFamily: 'var(--font-ms-madi)' }}
            >
              hallo
            </span>
            <table className="border-collapse w-full">
              <tbody>
                <tr>
                  <td className="border border-slate-300" colSpan={2}>1</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">1</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">1</td>
                </tr>
              </tbody>
            </table>
        </section>

        <aside className="flex flex-col justify-between gap-10">
          <nav className="space-y-6">

          </nav>
          <div className="space-y-3 text-xs text-slate-400">


          </div>
        </aside>
      </main>
    </div>
  );
}

