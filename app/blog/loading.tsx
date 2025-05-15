import { MainNav } from "@/components/main-nav"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 mt-16">
        <div className="container mx-auto z-10 relative">
          <div className="flex flex-col items-center mb-12">
            <div className="h-12 w-3/4 bg-gray-800 rounded-lg animate-pulse mb-4"></div>
            <div className="h-6 w-2/4 bg-gray-800 rounded-lg animate-pulse mb-8"></div>
          </div>
        </div>
      </section>

      {/* Articles Section - Loading Skeletons */}
      <section className="relative w-full py-12 px-4">
        <div className="container mx-auto z-10 relative">
          <div className="grid grid-cols-1 gap-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="w-full h-64 md:h-full bg-gray-800 animate-pulse"></div>
                  </div>
                  <div className="p-6 md:p-8 md:w-2/3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-6 w-24 bg-blue-900/50 rounded animate-pulse"></div>
                      <div className="h-6 w-32 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                    <div className="h-10 w-3/4 bg-gray-800 rounded-lg animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-800 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-full bg-gray-800 rounded animate-pulse mb-2"></div>
                    <div className="h-4 w-2/3 bg-gray-800 rounded animate-pulse mb-6"></div>
                    <div className="h-6 w-40 bg-gray-800 rounded animate-pulse mt-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
