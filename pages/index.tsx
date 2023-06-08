import YogaPoses from "components/yogaPoses";
import Link from "next/link";
import Header from "components/header";

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <Header />
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
