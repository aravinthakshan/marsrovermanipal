"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Trophy, Medal, Award, Star } from "lucide-react"

const achievements = [
  {
    year: "2025",
    competition: "International Rover Challenge 2025",
    position: "1st Worldwide",
    highlight: true,
  },
  {
    year: "2025",
    competition: "European Rover Challenge 2025",
    position: "10th Worldwide",
    highlight: false,
  },
  {
    year: "2024",
    competition: "International Rover Challenge 2024",
    position: "1st Worldwide",
    highlight: true,
  },
  {
    year: "2024",
    competition: "University Rover Challenge 2024",
    position: "3rd in Science Mission",
    highlight: false,
  },
  {
    year: "2023",
    competition: "International Rover Challenge 2023",
    position: "3rd Worldwide",
    highlight: false,
  },
  {
    year: "2022",
    competition: "European Rover Challenge 2022",
    position: "2nd Worldwide",
    highlight: true,
  },
  {
    year: "2021",
    competition: "International Rover Design Challenge 2021",
    position: "3rd Worldwide",
    highlight: false,
  },
  {
    year: "2021",
    competition: "European Rover Challenge 2021",
    position: "4th Worldwide",
    highlight: false,
  },
  {
    year: "2020",
    competition: "University Rover Challenge 2020",
    position: "7th Worldwide",
    highlight: false,
  },
  {
    year: "2019",
    competition: "University Rover Challenge 2019",
    position: "1st in Asia | 8th Worldwide",
    highlight: true,
  },
  {
    year: "2018",
    competition: "International Rover Challenge 2018",
    position: "1st Worldwide",
    highlight: true,
  },
  {
    year: "2018",
    competition: "University Rover Challenge 2018",
    position: "7th Worldwide",
    highlight: false,
  },
  {
    year: "2017",
    competition: "University Rover Challenge 2017",
    position: "1st in Asia | 8th Worldwide",
    highlight: true,
  },
]

function getPositionIcon(position: string, highlight: boolean) {
  const lower = position.toLowerCase()
  if (lower.includes("1st") && !lower.includes("asia")) {
    return <Trophy className="w-6 h-6 text-yellow-400" />
  } else if (lower.includes("1st in asia") || lower.includes("2nd")) {
    return <Medal className="w-6 h-6 text-gray-300" />
  } else if (lower.includes("3rd")) {
    return <Medal className="w-6 h-6 text-amber-600" />
  } else if (highlight) {
    return <Star className="w-6 h-6 text-yellow-400" />
  }
  return <Award className="w-6 h-6 text-blue-400" />
}

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative flex items-center gap-6 p-6 border transition-all duration-300 ${
        achievement.highlight
          ? "border-yellow-500/50 bg-yellow-500/5 hover:bg-yellow-500/10"
          : "border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-900"
      }`}
    >
      {/* Year */}
      <div className="flex-shrink-0 w-16 text-center">
        <span className="font-mono text-2xl font-bold text-neutral-500">{achievement.year}</span>
      </div>

      {/* Icon */}
      <div className="flex-shrink-0">
        {getPositionIcon(achievement.position, achievement.highlight)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-white truncate">{achievement.competition}</h3>
        <p className={`text-sm font-medium ${achievement.highlight ? "text-yellow-400" : "text-neutral-400"}`}>
          {achievement.position}
        </p>
      </div>

      {/* Highlight indicator */}
      {achievement.highlight && (
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-yellow-500/30 border-l-[40px] border-l-transparent" />
      )}
    </motion.div>
  )
}

export default function IRCPage() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
          >
            {/* Logo */}
            <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0 bg-white rounded-2xl p-4">
              <Image
                src="/comp_logo/SPROS_IRC_logo.png"
                alt="IRC Logo"
                fill
                className="object-contain p-2"
              />
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center md:text-left">
                International Rover Challenge
              </h1>
              <p className="text-xl text-neutral-400 text-center md:text-left">
                Space Robotics Society (SPROS)
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-lg text-neutral-300 leading-relaxed max-w-4xl">
              The International Rover Challenge (IRC), organized by the Space Robotics Society (SPROS), 
              is a global space robotics competition that challenges university teams to conceptualize, 
              design, develop, and operate next-generation rovers in simulated Martian conditions.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-4xl mt-4">
              The competition provides students with a real-world, interdisciplinary engineering experience, 
              integrating mechanical, electrical, software, and life sciences with essential soft skills 
              such as project management, systems engineering, and business planning. Through IRC, our team 
              applies theoretical knowledge to practical problem-solving, contributing innovative rover designs, 
              mission strategies, and scientific systems aimed at advancing autonomous planetary exploration.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-neutral-900 border border-neutral-800 p-6 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">1st Place Wins</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">13+</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Competitions</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">9+</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Years of Excellence</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">Top 10</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">Consistently</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 mb-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-lg border border-neutral-800">
            <Image
              src="/irc-mit.png"
              alt="Mars Rover Manipal Team at IRC"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <p className="text-center text-sm text-neutral-400 mt-4">
            Mars Rover Manipal — IRC Champions
          </p>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <div className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-neutral-400">
              A legacy of excellence in international rover competitions
            </p>
          </motion.div>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
