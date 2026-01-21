"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Linkedin, Github, Globe } from "lucide-react"

interface TeamMember {
  name: string
  image: string
  year?: string
  position?: string
  domain?: string
  description?: string
  expertise?: string
  linkedin?: string
  github?: string
  website?: string
}

// Google Sheet ID and sheet names
const SPREADSHEET_ID = "1URxCnU98YvX7dtyJWE7PzLhrqQKdVDpI7y0C1bQt9H4"

// Sheet names for different sections
const SHEET_NAMES = {
  board: "Board",
  senior: "Senior team",
  rover: "Rover team",
  research: "Research",
}

// Convert Google Drive view link to direct image URL
function convertDriveUrl(url: string): string {
  if (!url) return ""
  
  const trimmedUrl = url.trim()
  
  // If it's a Google Drive link, convert it to direct view URL
  // Matches: /file/d/FILE_ID/ or /d/FILE_ID/ or id=FILE_ID
  const driveMatch = trimmedUrl.match(/(?:\/d\/|\/file\/d\/|id=)([a-zA-Z0-9_-]+)/)
  if (driveMatch) {
    // Use thumbnail URL which works better for public files
    return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1000`
  }
  
  // If it's just a filename (no http/https), assume it's in the team folder
  if (!trimmedUrl.startsWith("http") && !trimmedUrl.startsWith("/")) {
    return `/team/${trimmedUrl}`
  }
  
  return trimmedUrl
}

// Find column index by checking if header contains the keyword
function findColumnIndex(headers: string[], ...keywords: string[]): number {
  for (const keyword of keywords) {
    const index = headers.findIndex(h => h.includes(keyword))
    if (index !== -1) return index
  }
  return -1
}

// Get value from row by column index, with fallback
function getValue(row: string[], index: number): string {
  if (index === -1 || index >= row.length) return ""
  return row[index]?.trim() || ""
}

// Fetch data from Google Sheets
async function fetchSheetData(sheetName: string): Promise<TeamMember[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`
    const response = await fetch(url)
    const csvText = await response.text()
    
    // Parse CSV
    const rows = parseCSV(csvText)
    if (rows.length < 2) return []
    
    // Normalize headers: lowercase, trim, remove extra spaces
    const headers = rows[0].map(h => h.toLowerCase().trim().replace(/\s+/g, ' '))
    
    // Find column indices flexibly
    const nameIdx = findColumnIndex(headers, "name")
    const imageIdx = findColumnIndex(headers, "link to image", "image", "photo")
    const yearIdx = findColumnIndex(headers, "year")
    const positionIdx = findColumnIndex(headers, "position", "role")
    const domainIdx = findColumnIndex(headers, "domain")
    const descriptionIdx = findColumnIndex(headers, "description")
    const expertiseIdx = findColumnIndex(headers, "expertise")
    const linkedinIdx = findColumnIndex(headers, "linkedin")
    const githubIdx = findColumnIndex(headers, "github")
    const websiteIdx = findColumnIndex(headers, "website", "others")
    
    console.log("Sheet:", sheetName, "Headers:", headers)
    console.log("Image column index:", imageIdx)
    
    const data: TeamMember[] = []
    
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i]
      const name = getValue(row, nameIdx)
      if (!name) continue // Skip empty rows
      
      const imageUrl = getValue(row, imageIdx)
      console.log(`Row ${i} - Name: ${name}, Raw Image URL: ${imageUrl}`)
      
      const member: TeamMember = {
        name,
        image: convertDriveUrl(imageUrl),
        year: getValue(row, yearIdx),
        position: getValue(row, positionIdx),
        domain: getValue(row, domainIdx),
        description: getValue(row, descriptionIdx),
        expertise: getValue(row, expertiseIdx),
        linkedin: getValue(row, linkedinIdx),
        github: getValue(row, githubIdx),
        website: getValue(row, websiteIdx),
      }
      
      console.log(`Converted image URL: ${member.image}`)
      data.push(member)
    }
    
    return data
  } catch (error) {
    console.error(`Error fetching sheet ${sheetName}:`, error)
    return []
  }
}

// Parse CSV properly handling quoted fields
function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let currentRow: string[] = []
  let currentField = ""
  let inQuotes = false
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const nextChar = text[i + 1]
    
    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"'
        i++
      } else if (char === '"') {
        inQuotes = false
      } else {
        currentField += char
      }
    } else {
      if (char === '"') {
        inQuotes = true
      } else if (char === ',') {
        currentRow.push(currentField)
        currentField = ""
      } else if (char === '\n' || (char === '\r' && nextChar === '\n')) {
        currentRow.push(currentField)
        rows.push(currentRow)
        currentRow = []
        currentField = ""
        if (char === '\r') i++
      } else if (char !== '\r') {
        currentField += char
      }
    }
  }
  
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField)
    rows.push(currentRow)
  }
  
  return rows
}

interface TeamSectionProps {
  title: string
  members: TeamMember[]
  showDetails?: boolean
}

function TeamSection({ title, members, showDetails = false }: TeamSectionProps) {
  if (members.length === 0) return null
  
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
                {member.image ? (
                  member.image.startsWith("http") ? (
                    // Use regular img tag for external URLs (Google Drive, etc.)
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )
                ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                    <span className="text-4xl text-neutral-600">{member.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                {member.position && (
                  <p className="text-sm text-neutral-300 font-medium tracking-wide uppercase">{member.position}</p>
                )}
                {showDetails && member.expertise && (
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2">{member.expertise}</p>
                )}
                
                {/* Social Links */}
                <div className="flex gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.website && (
                    <a 
                      href={member.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default function TeamPage() {
  const [boardMembers, setBoardMembers] = useState<TeamMember[]>([])
  const [seniorMembers, setSeniorMembers] = useState<TeamMember[]>([])
  const [roverMembers, setRoverMembers] = useState<TeamMember[]>([])
  const [researchMembers, setResearchMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTeamData() {
      setLoading(true)
      
      const [board, senior, rover, research] = await Promise.all([
        fetchSheetData(SHEET_NAMES.board),
        fetchSheetData(SHEET_NAMES.senior),
        fetchSheetData(SHEET_NAMES.rover),
        fetchSheetData(SHEET_NAMES.research),
      ])
      
      setBoardMembers(board)
      setSeniorMembers(senior)
      setRoverMembers(rover)
      setResearchMembers(research)
      setLoading(false)
    }
    
    loadTeamData()
  }, [])

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

      {loading ? (
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <>
          <TeamSection title="Board" members={boardMembers} showDetails />
          <TeamSection title="Senior Team" members={seniorMembers} />
          <TeamSection title="Rover Team" members={roverMembers} />
          <TeamSection title="Research" members={researchMembers} />
        </>
      )}

      <Footer />
    </main>
  )
}
