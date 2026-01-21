"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Users, Globe, Award } from "lucide-react"

const sponsors = [
  { name: "MAHE", logo: "/sponsors/Mahe.jpg" },
  { name: "NVIDIA", logo: "/sponsors/NVIDIA.jpg" },
  { name: "Altium Designer", logo: "/sponsors/altium_designer.png" },
  { name: "ANSYS", logo: "/sponsors/ansys.png" },
  { name: "PCB Power", logo: "/sponsors/PCB_Power.png" },
  { name: "Solidworks", logo: "/sponsors/Solidworks.png" },
  { name: "Sujanand", logo: "/sponsors/Sujanand.png" },
  { name: "Wheeleez", logo: "/sponsors/Wheeleez.png" },
]

const benefits = [
  {
    icon: Users,
    title: "Access to 20,000+ Students",
    description: "Direct exposure to innovative engineering students from Manipal Academy of Higher Education.",
  },
  {
    icon: Globe,
    title: "Global Visibility",
    description: "Feature in international competitions, social media, and technical festivals like TechTatva.",
  },
  {
    icon: Award,
    title: "Corporate Social Responsibility",
    description: "Invest in the future of education and autonomous robotics research.",
  },
  {
    icon: Mail,
    title: "Direct Engagement",
    description: "Visit our workshop, attend events, and connect with talented future engineers.",
  },
]

const brochurePages = [
  "/brochure/1.webp",
  "/brochure/2.webp",
  "/brochure/3.webp",
  "/brochure/4.webp",
  "/brochure/5.webp",
  "/brochure/6.webp",
  "/brochure/7.webp",
  "/brochure/8.webp",
  "/brochure/9.webp",
  "/brochure/10.webp",
]

export default function SponsorshipPage() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Partner With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          >
            Mars Rover Manipal is a leading student project team of Manipal Academy of Higher Education. 
            With each subsequent year, the team has built a better, more capable design with a better 
            performance than the previous one.
          </motion.p>
        </div>
      </div>

      {/* Team Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 mb-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-neutral-800">
            <Image
              src="/brochure/team.jpg"
              alt="Mars Rover Manipal Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Why Sponsor Section */}
      <div className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Sponsor Us?</h2>
            <p className="text-neutral-400 text-center max-w-2xl mx-auto">
              Your investment allows us to further our research into autonomous robotics and space exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
              >
                <div className="flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-neutral-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Sections */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800">
                  <Image
                    src="/photos20/PCB Power.webp"
                    alt="PCB Power Sponsorship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Sponsoring a team like us goes a long way in ensuring the Corporate Social Responsibility 
                  for your company. When you invest in us, you invest in the future of education. An autonomous 
                  rover can open doors to a large number of possibilities, ranging from disaster management 
                  to environment cleanliness.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-800">
                  <Image
                    src="/Sponsorship/tushaar_wsu.webp"
                    alt="Team at Competition"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Home to about 20,000 students from all parts of the world, very few colleges provide diversity, 
                  as Manipal Academy of Higher Education does. Joining our family of sponsors provides your company 
                  exposure to all of these students. Your company will come in direct contact with innovative and 
                  dedicated students, who are experienced and more than able to handle situations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Current Sponsors */}
      <div className="px-6 md:px-12 pb-24 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
            <p className="text-neutral-400">
              We are grateful to our sponsors who make our work possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 flex items-center justify-center aspect-square hover:shadow-lg hover:shadow-white/10 transition-shadow"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Brochure Section */}
      <div className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Brochure</h2>
            <p className="text-neutral-400">
              Learn more about our team and what we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brochurePages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
              >
                <Image
                  src={page}
                  alt={`Brochure page ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Sponsoring?</h2>
            <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
              Get in touch with us to learn more about sponsorship opportunities and how we can work together.
            </p>
            <a
              href="mailto:marsrovermanipal@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
