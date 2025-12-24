"use client"

export default function News() {
  const articles = [
    {
      id: 1,
      title: "Mars Rover Team Wins International Competition",
      excerpt: "Our team secured first place in the Asian region at the University Rover Challenge 2019, showcasing innovative rover design and engineering excellence.",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Breakthrough in Autonomous Navigation Systems",
      excerpt: "New research published on advanced AI algorithms for planetary exploration rovers, pushing the boundaries of autonomous space robotics.",
      date: "February 28, 2024",
    },
    {
      id: 3,
      title: "Collaboration with International Space Agencies",
      excerpt: "Partnership announcement with leading space organizations to develop next-generation rover technologies for future Mars missions.",
      date: "January 10, 2024",
    },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center uppercase tracking-wide">
          News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              onClick={handleClick}
              className="group block bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-white transition-all duration-300 cursor-pointer"
            >
              <div className="p-6 md:p-8">
                <div className="text-sm text-neutral-400 mb-3 uppercase tracking-wide">
                  {article.date}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-neutral-300 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-6 text-sm text-white group-hover:text-neutral-300 transition-colors duration-300">
                  Read More →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

