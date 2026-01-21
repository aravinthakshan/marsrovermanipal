"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Trophy, Medal, Award } from "lucide-react"

interface Competition {
  id: number
  name: string
  year: string
  position: string
  info: string
  image: string
  website?: string
  video?: string
}

interface CompetitionCategory {
  id: string
  name: string
  logo: string
  description: string
  competitions: Competition[]
}

const competitionData: CompetitionCategory[] = [
  {
    id: "irc",
    name: "IRC",
    logo: "/comp_logo/SPROS_IRC_logo.png",
    description: "The International Rover Challenge (formerly known as the Indian Rover Challenge), organized by the Space Robotics Society, is an annual robotics competition designed to provide students worldwide with an engineering challenge in the realm of space exploration. Distinguished as the sole competition of its kind in the Asia-Pacific region, the IRC serves the critical objective of fostering innovation and inspiring aspiring engineers.",
    competitions: [
      {
        id: 1,
        name: "IRC 2024",
        year: "2024",
        position: "1st Position",
        info: "Mars Rover Manipal secured 1st place among 25 global qualifiers at the International Rover Challenge 2024, held at PSG College of Technology in Coimbatore from January 24th to 29th. Organized by SproS, this accomplishment underscores the team's technical prowess and positions them prominently in the global space exploration community.",
        image: "/irc/irc2024.jpg",
        website: "https://www.spaceroboticssociety.org/events/international-rover-challenge/",
      },
      {
        id: 2,
        name: "IRC 2019",
        year: "2019",
        position: "Host",
        info: "Indian Rover Challenge (IRC) 2019, the second edition, featured design challenges and technicalities, encouraging students from all over the world to provide solutions and move closer towards the next phases of space exploration. It was organized by the students of Mars Rover Manipal in association with Manipal Academy of Higher Education and the Mars Society.",
        image: "/irc/image1.jpg",
        website: "https://southasia.marssociety.org/indianroverchallenge/irc-2019/",
      },
      {
        id: 3,
        name: "IRC 2018",
        year: "2018",
        position: "1st Position",
        info: "Mars Rover Manipal participated in IRC 2018 along with teams from all over Asia. The event was organized by ISTE VIT and Creative Labs at Vellore Institute of Technology. Mars Rover Manipal performed very well and were declared winners with a final score of 616 points out of 760, beating the second closest opponent by a margin of 129 points.",
        image: "/irc/image3.webp",
        website: "https://southasia.marssociety.org/irdc/",
      },
    ],
  },
  {
    id: "urc",
    name: "URC",
    logo: "/comp_logo/URC_Logo.webp",
    description: "The University Rover Challenge is a premier robotics competition organized annually by the Mars Society USA during summer at Mars Desert Research Station (MDRS) in Utah, USA. The challenge is to build a next-generation Mars Rover capable of working alongside humans in future Martian colonies.",
    competitions: [
      {
        id: 1,
        name: "URC 2024",
        year: "2024",
        position: "18th Worldwide",
        info: "The 18th edition of University Rover Challenge was held at the Mars Desert Research Station in Hanksville, Utah from 29th May to June 1st 2024. Mars Rover Manipal was able to maintain its streak of being the best rover team from India for its 7th consecutive year.",
        image: "/urc2024/urc2024.jpg",
        video: "https://www.youtube.com/embed/CnRiPZGofaw",
      },
      {
        id: 2,
        name: "URC 2022",
        year: "2022",
        position: "21st Worldwide",
        info: "The 16th edition of University Rover Challenge was held at the Mars Desert Research Station in Hanksville, Utah from June 1st to June 4th 2022. MRM was also the recipient of the prestigious John Barainca award for the best science team in the competition, securing an 85/100 in this challenging mission.",
        image: "/urc2022/urc2022-5.webp",
        video: "https://www.youtube.com/embed/tgAOEiIUJ5k",
      },
      {
        id: 3,
        name: "URC 2020",
        year: "2020",
        position: "7th Worldwide",
        info: "The 14th edition of University Rover Challenge was cancelled due to the Corona virus Pandemic. MRM stood 1st in India, 2nd in Asia and 7th worldwide based on SAR results. We also continued our run of being the best Indian Rover Team for the fourth consecutive year.",
        image: "/comp/2020Rover.webp",
        video: "https://www.youtube.com/embed/V22SHOJQx4I",
      },
      {
        id: 4,
        name: "URC 2019",
        year: "2019",
        position: "8th Worldwide",
        info: "MRM secured the 8th rank globally which placed us as the best rover team in Asia. MRM was the recipient of the prestigious Barainca award for the best science team in the competition, securing a 95/100 in this challenging mission.",
        image: "/comp/urc2019.webp",
        video: "https://www.youtube.com/embed/vY86gCyUFQ8",
      },
      {
        id: 5,
        name: "URC 2018",
        year: "2018",
        position: "7th Worldwide",
        info: "MRM secured a world rank of 7 in URC 2018. Our rover Airawat once again placed us as India's best and Asia's second best rover team at URC.",
        image: "/comp/urc2018.webp",
        video: "https://www.youtube.com/embed/8QmRq4NSOIg",
      },
      {
        id: 6,
        name: "URC 2017",
        year: "2017",
        position: "8th Worldwide",
        info: "We achieved 8th position all over the world. Our rover was the best performer from India and Asia. Our biggest highlight was the score of 100 out of 100 in the Science Cache Task.",
        image: "/comp/rover17.jpeg",
        video: "https://www.youtube.com/embed/6Mr8owXfWoc",
      },
      {
        id: 7,
        name: "URC 2016",
        year: "2016",
        position: "13th Worldwide",
        info: "This was the first time we were participating in URC. 63 teams registered for the competition and 28 were selected. We stood 13th all over the world. Our rover was ranked second best in India and Asia.",
        image: "/comp/rover16.webp",
        video: "https://www.youtube.com/embed/cG70pC12jTU",
      },
    ],
  },
  {
    id: "irdc",
    name: "IRDC",
    logo: "/comp_logo/MSSA_Logo.png",
    description: "The International Rover Design Challenge is a competition for university students which challenges to design Mars rovers which shall be fully equipped and mission ready for Operation on Mars. Teams are supposed to carefully plan each subsystem of the rover considering various extra-terrestrial parameters in design.",
    competitions: [
      {
        id: 1,
        name: "IRDC 2023",
        year: "2023",
        position: "4th Position",
        info: "Mars Rover Manipal bagged the 4th position out of 20 teams from four countries in the fourth edition of the International Rover Design Challenge (IRDC), hosted by the Space Robotics Society (SPROS).",
        image: "/comp/irdc2024.jpg",
        website: "https://www.spaceroboticssociety.org/events/international-rover-challenge/",
      },
      {
        id: 2,
        name: "IRDC 2022",
        year: "2022",
        position: "2nd Position",
        info: "Mars Rover Manipal bagged the 2nd position out of 24 teams from four countries in the third edition of the International Rover Design Challenge (IRDC), hosted by the Space Robotics Society (SPROS).",
        image: "/comp/irdc2022render.webp",
        website: "https://www.spaceroboticssociety.org/events/international-rover-challenge/",
      },
      {
        id: 3,
        name: "IRDC 2021",
        year: "2021",
        position: "3rd Position",
        info: "Mars Rover Manipal bagged the 3rd position out of 32 teams from four countries in the second edition of the International Rover Design Challenge (IRDC), hosted by Mars Society South Asia (MSSA).",
        image: "/comp/IRDC_20211.webp",
        website: "https://southasia.marssociety.org/irdc/",
      },
      {
        id: 4,
        name: "IRDC 2020",
        year: "2020",
        position: "1st Position",
        info: "Mars Rover Manipal bagged the 1st position in IRDC 2020. 28 teams from 7 countries had taken part. MRM scored 816.5 points for the submission, securing the first position by a margin of 15 points.",
        image: "/comp/IRDCrover1.webp",
        website: "https://southasia.marssociety.org/irdc/",
      },
    ],
  },
  {
    id: "erc",
    name: "ERC",
    logo: "/comp_logo/ERC_Logo.png",
    description: "The European Rover Challenge is an international robotics competition, where academic teams from around the world present their mobile robot designs, competing in competitions based on real ESA and NASA missions. The competition takes place on the world's largest artificial Martian track.",
    competitions: [
      {
        id: 1,
        name: "ERC 2022",
        year: "2022",
        position: "2nd Position",
        info: "Mars Rover Manipal finished 2nd out of 28 teams from around the world in the remote edition of the European Rover Challenge (ERC) 2022. In addition, we were awarded The Best Performing Team in the Science, Maintenance and Presentation Tasks.",
        image: "/comp/ercteam22.webp",
        website: "https://roverchallenge.eu/en/main-page/",
      },
      {
        id: 2,
        name: "ERC 2021",
        year: "2021",
        position: "4th Position",
        info: "Mars Rover Manipal finished 4th out of 34 teams from around the world in the remote edition of the European Rover Challenge (ERC). In addition, we received an honourable mention as the best performing team in the presentation task.",
        image: "/comp/ERC_TEAM.webp",
        website: "https://roverchallenge.eu/en/main-page/",
      },
    ],
  },
  {
    id: "imh",
    name: "IMH",
    logo: "/comp_logo/MSSA_Logo.png",
    description: "International Mars Hackathon challenges teams from diverse disciplines to come up with insightful solutions to mind-boggling Space Exploration problems! The 48hr competition requires students to think on their feet and devise creative approaches in several thematic areas.",
    competitions: [
      {
        id: 1,
        name: "IMH 2020",
        year: "2020",
        position: "3rd Worldwide",
        info: "Mars Rover Manipal bagged the 3rd position worldwide in IMH 2020.",
        image: "/irc/IMH.webp",
        website: "https://southasia.marssociety.org/irdc/",
      },
    ],
  },
]

function getPositionIcon(position: string) {
  const lower = position.toLowerCase()
  if (lower.includes("1st") || lower.includes("first")) {
    return <Trophy className="w-5 h-5 text-yellow-400" />
  } else if (lower.includes("2nd") || lower.includes("second")) {
    return <Medal className="w-5 h-5 text-gray-300" />
  } else if (lower.includes("3rd") || lower.includes("third")) {
    return <Medal className="w-5 h-5 text-amber-600" />
  }
  return <Award className="w-5 h-5 text-blue-400" />
}

function CompetitionCard({ competition, index }: { competition: Competition; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={competition.image}
          alt={competition.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        
        {/* Position Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {getPositionIcon(competition.position)}
          <span className="text-sm font-medium text-white">{competition.position}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{competition.name}</h3>
          <span className="text-sm text-neutral-400">{competition.year}</span>
        </div>
        
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-4">
          {competition.info}
        </p>

        {/* Links */}
        <div className="flex gap-3">
          {competition.website && (
            <a
              href={competition.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Website
            </a>
          )}
          {competition.video && (
            <a
              href={competition.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Video
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function CompetitionSection({ category }: { category: CompetitionCategory }) {
  return (
    <section className="mb-24">
      {/* Header with Logo and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 mb-12 items-center"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0 bg-white rounded-lg p-4">
          <Image
            src={category.logo}
            alt={category.name}
            fill
            className="object-contain p-2"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h2>
          <p className="text-neutral-400 leading-relaxed max-w-3xl">
            {category.description}
          </p>
        </div>
      </motion.div>

      {/* Competition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.competitions.map((comp, index) => (
          <CompetitionCard key={comp.id} competition={comp} index={index} />
        ))}
      </div>
    </section>
  )
}

export default function CompetitionsPage() {
  const [activeTab, setActiveTab] = useState<string>("all")
  
  const filteredCategories = activeTab === "all" 
    ? competitionData 
    : competitionData.filter(cat => cat.id === activeTab)

  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Competitions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-neutral-400 max-w-2xl mx-auto"
        >
          Mars Rover Manipal has consistently been among the top rover teams globally, 
          competing in prestigious international competitions.
        </motion.p>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "all"
                ? "bg-white text-black"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            }`}
          >
            All
          </button>
          {competitionData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-white text-black"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Competitions Content */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {filteredCategories.map((category) => (
          <CompetitionSection key={category.id} category={category} />
        ))}
      </div>

      <Footer />
    </main>
  )
}
