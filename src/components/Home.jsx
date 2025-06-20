import React from 'react';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-16 border-y bg-slate-400">
          <div className="px-4 flex justify-center">
            <div className="grid w-full gap-10 px-4 sm:px-6 md:px-10 md:grid-cols-2 items-center">

              
              {/* Text Content */}
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-center md:text-left">
                  A One Stop Solution For Maintenance Of Your Housing Society.
                </h1>
                <h3 className="mt-4 text-xl md:text-2xl font-semibold text-center md:text-left">
                  "Empowering Communities, One Click at a Time."
                </h3>
              </div>

              {/* Image */}
              <div className="flex justify-center md:justify-end">
                <img
                  className="rounded-full object-contain w-full max-w-xs md:max-w-sm lg:max-w-md"
                  src="https://www.chsone.in/blog/wp-content/uploads/2018/03/32068293.jpg"
                  alt="img-desc"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="w-full py-16 bg-white dark:bg-gray-900">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Solutions
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
                We provide innovative solutions to everyday problems. From
                home to healthcare, we've got you covered.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-4">
              {/* Card 1 */}
              <div className="flex flex-col items-center space-y-2">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <h3 className="text-xl font-bold">Home Services</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Make your home smarter and your life more convenient.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center space-y-2">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                <h3 className="text-xl font-bold">Healthcare</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Accessible and personalized healthcare solutions for everyone.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center space-y-2">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24">
                  <path d="M8 6v6M15 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
                  <circle cx="7" cy="18" r="2"/>
                  <path d="M9 18h5"/>
                  <circle cx="16" cy="18" r="2"/>
                </svg>
                <h3 className="text-xl font-bold">Transportation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seamless and efficient travel experiences at your fingertips.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center space-y-2">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24">
                  <path d="m4 6 8-4 8 4"/>
                  <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/>
                  <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/>
                  <path d="M18 5v17M6 5v17"/>
                  <circle cx="12" cy="9" r="2"/>
                </svg>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Empowering learning with technology for the next generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Background Image Fullscreen
        <section className="relative w-full h-screen bg-gray-200 dark:bg-gray-800">
          <img
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://vintageproperty.in/wp-content/uploads/2018/09/project-prestige-shantiniketan-elevation-2-1060x795px.jpg"
          />
        </section> */}
      </main>
    </div>
  );
}

export default Home;
