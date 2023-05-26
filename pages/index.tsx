import YogaPoses from "components/yogaPoses";

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Yoga Poses
            </h1>
            <p>View random yoga poses with the click of a button</p>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <YogaPoses />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
