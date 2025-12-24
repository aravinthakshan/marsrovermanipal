"use client"

export default function News() {
  const articles = [
    {
      id: 1,
      title: "MIT-MAHE team comes 3rd in 2nd edition of International Rover Design Challenge",
      excerpt: "Team Mars Rover Manipal had 30 members from 2nd and 3rd year engineering students who designed rover parts keeping in mind the various factors that would be different on Mars. The team scored 530 points for their System Concept Review submission.",
      date: "2021",
      link: "https://navjeevanexpress.com/mit-mahe-team-comes-3rd-in-2nd-edition-of-international-rover-design-challenge/",
      source: "Navjeevan Express",
    },
    {
      id: 2,
      title: "MIT students bag third place in rover design challenge",
      excerpt: "Manipal Institute of Technology (MIT) announced its student team stood 3rd in the second edition of the International Rover Design Challenge (IRDC) 2021. 32 teams from 4 countries participated in the IRDC conducted by The Mars Society South Asia (MSSA).",
      date: "2021",
      link: "https://www.thehindu.com/news/cities/Mangalore/mit-students-bag-third-place-in-rover-design-challenge/article36453386.ece",
      source: "The Hindu",
    },
    {
      id: 3,
      title: "Mars Rover Manipal secures first place in Indian Rover Challenge 2018",
      excerpt: "Mars Rover Manipal achieved first place in the Indian Rover Challenge 2018, showcasing exceptional engineering and design capabilities in rover development for Mars exploration missions.",
      date: "2018",
      link: "https://timesofindia.indiatimes.com/city/mangaluru/mars-rover-manipal-secures-first-place-in-indian-rover-challenge-2018/articleshow/62495964.cms",
      source: "The Times of India",
    },
  ]

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
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-white transition-all duration-300 cursor-pointer"
            >
              <div className="p-6 md:p-8">
                <div className="text-sm text-neutral-400 mb-3 uppercase tracking-wide">
                  {article.date} • {article.source}
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

