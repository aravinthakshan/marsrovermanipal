import Image from "next/image"

export default function Featured() {
  return (
    <div id="featured-section" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <Image
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4">Mars Rover Manipal</h3>
        <p className="text-base lg:text-lg mb-8">
        Mars Rover Manipal is a multi-disciplinary student team from Manipal Academy of Higher Education (MAHE) striving to design and build next generation rovers for exploration of extraterrestrial environments and focus on applications of robotics in interplanetary missions.
        We participate in the annual University Rover Challenge (URC) organized by the Mars Society, USA. In URC 2019, our team finished 8th out of 84 teams across the globe and stood 1st among the Asian teams. Since our inception, the team has provided a platform to aspiring engineering students by pushing them beyond the theoretical knowledge they gain in classrooms to inculcate technical and practical skills. The team is also working on research related to the role of a rover in the field of space exploration and future Mars missions.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit">
          LEARN MORE
        </button>
      </div>
    </div>
  )
}
