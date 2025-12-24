"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

interface TeamMember {
  name: string
  role?: string
  image: string
}

const boardMembers: TeamMember[] = [
  {
    name: "Gagan Kiran Menderkar",
    role: "Team Leader",
    image: "/team/gagan.jpeg"
  },
  {
    name: "Vivek Kolekar",
    role: "Team Manager",
    image: "/team/vivek.jpg"
  },
  {
    name: "Aryavarta Singh",
    role: "Technical Head",
    image: "/team/aryavarta.jpg"
  },
  {
    name: "Mustafa Haji",
    role: "Social Media and Public Relations Head",
    image: "/team/mustafa.jpeg"
  },
  {
    name: "Ankur Monga",
    role: "Artificial Intelligence and Automation Head",
    image: "/team/ankur.jpg"
  },
  {
    name: "Piyush Daigavhane",
    role: "Electronics and Control Systems Head",
    image: "/team/piyush.jpg"
  },
  {
    name: "Vipul Dinesh",
    role: "Mechanical Design and Manufacturing Head",
    image: "/team/vipul.jpg"
  },
  {
    name: "Arooja Tyagi",
    role: "Life Science Head",
    image: "/team/arooja.jpg"
  },
  {
    name: "Ishaan Gakhar",
    role: "Research Head",
    image: "/team/ishaan.jpg"
  }
]

const aiMembers: TeamMember[] = [
  { name: "Prateek Manoj Mhatre", image: "/team/ai/prateek.webp" },
  { name: "Nikhilesh Shashikumar", image: "/team/ai/nikhilesh.webp" },
  { name: "G.Siddharth Reddy", image: "/team/ai/siddharth.webp" },
  { name: "Aditi Arun", image: "/team/ai/Aditi.jpg" },
  { name: "Akshat Gupta", image: "/team/ai/akshat.jpg" },
  { name: "Dillon Asher Almeida", image: "/team/ai/dillon.jpg" },
]

const ecsMembers: TeamMember[] = [
  { name: "Aarish Patel", image: "/team/ecs/Aarish.jpg" },
  { name: "Harsh Gupta", image: "/team/ecs/Harsh.jpg" },
  { name: "Jahan Marfatia", image: "/team/ecs/jahan.jpeg" },
  { name: "Sameer Singh", image: "/team/ecs/sameer.jpg" },
  { name: "Suhail Malik", image: "/team/ecs/Suhail.jpeg" },
]

const mechanicalMembers: TeamMember[] = [
  { name: "Suryank Joshi", image: "/team/mechanical/suryank.webp" },
  { name: "Het Ambaliya", image: "/team/mechanical/het.jpg" },
  { name: "Vrishin Ashlyn Lakra", image: "/team/mechanical/Vrishin.jpg" },
  { name: "Kedar Vetal", image: "/team/mechanical/kedar.jpg" },
  { name: "Krishna Biranje", image: "/team/mechanical/Krishna.jpg" },
  { name: "Ronan Andrew Fonseca", image: "/team/mechanical/Ronan.png" },
  { name: "Shreyan Pal", image: "/team/mechanical/Shreyan.jpg" },
  { name: "Tanisha Bharambe", image: "/team/mechanical/Tanisha.jpeg" },
]

const managementMembers: TeamMember[] = [
  { name: "Neel Singhal", image: "/team/management/neel.jpg" },
]

const researchMembers: TeamMember[] = [
  { name: "Krish Didwania", image: "/team/research/krish.webp" },
  { name: "Laven Srivastava", image: "/team/research/laven.webp" },
  { name: "Nirbhay Singhal", image: "/team/research/nirbhay.webp" },
  { name: "A S Aravinthakshan", image: "/team/research/Aravinthakshan.jpeg" },
  { name: "Aadiv Rath", image: "/team/research/Aadiv.png" },
  { name: "Aditya Prashant Naidu", image: "/team/research/Aditya.png" },
  { name: "Anirvesh Arcot", image: "/team/research/Anirvesh.jpg" },
  { name: "Aravind Shenoy", image: "/team/research/Aravind.jpg" },
  { name: "Aryaman Gupta", image: "/team/research/aryaman.jpg" },
  { name: "Aryesh Guha", image: "/team/research/Aryesh.jpg" },
  { name: "Chinmay MK Rao", image: "/team/research/chinmay.jpg" },
  { name: "Dhrumil Bhatt", image: "/team/research/Dhrumil.jpg" },
  { name: "Hem Gosalia", image: "/team/research/Hem.jpg" },
  { name: "Sanidhya Singhal", image: "/team/research/Sanidhya.jpg" },
  { name: "Shaurya Singh Rathore", image: "/team/research/Shaurya.jpg" },
  { name: "Siddharth P", image: "/team/research/SiddharthP.jpg" },
  { name: "Yuvika Chaudhary", image: "/team/research/Yuvika.jpg" },
]

const scienceMembers: TeamMember[] = [
  { name: "Sanvi Shetty", image: "/team/science/sanvi.jpg" },
  { name: "Mitwa Saraf", image: "/team/science/Mitwa.jpg" },
  { name: "Anushree Dutt", image: "/team/science/Anushree.jpg" },
  { name: "Krish Bafna", image: "/team/science/Krish.jpeg" },
]

interface TeamSectionProps {
  title: string
  members: TeamMember[]
}

function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-neutral-200 uppercase tracking-wider">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900"
            >
              <div className="absolute inset-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                {member.role && (
                  <p className="text-sm text-neutral-300 font-medium tracking-wide uppercase">{member.role}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default function TeamPage() {
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
          The Team
        </motion.h1>
      </div>

      <TeamSection title="Board" members={boardMembers} />
      <TeamSection title="Artificial Intelligence & Automation" members={aiMembers} />
      <TeamSection title="Electronics & Control Systems" members={ecsMembers} />
      <TeamSection title="Mechanical Design & Manufacturing" members={mechanicalMembers} />
      <TeamSection title="Life Science" members={scienceMembers} />
      <TeamSection title="Research" members={researchMembers} />
      <TeamSection title="Management" members={managementMembers} />

      <Footer />
    </main>
  )
}
