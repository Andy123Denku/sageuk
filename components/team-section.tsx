import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Curtis DeBerg",
    role: "Founder & CEO",
    image: "/images/team-1.jpg",
    bio: "Visionary educator who founded SAGE to harness the entrepreneurial energy of youth worldwide.",
  },
  {
    name: "Maria Gonzalez",
    role: "Chief Operating Officer",
    image: "/images/team-2.jpg",
    bio: "Oversees global operations and ensures seamless program delivery across 30+ countries.",
  },
  {
    name: "James Chen",
    role: "Director of Programs",
    image: "/images/team-3.jpg",
    bio: "Designs and implements SAGE curricula that inspire the next generation of entrepreneurs.",
  },
  {
    name: "Sarah Mitchell",
    role: "Director of Partnerships",
    image: "/images/team-4.jpg",
    bio: "Builds strategic alliances with organizations, sponsors, and educators globally.",
  },
  {
    name: "Robert Okafor",
    role: "Board Chairman",
    image: "/images/team-5.jpg",
    bio: "Provides strategic guidance drawing on decades of experience in education and business.",
  },
  {
    name: "Emily Park",
    role: "Communications Lead",
    image: "/images/team-6.jpg",
    bio: "Amplifies the stories of SAGE entrepreneurs and drives global awareness of the mission.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-20 bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Leadership
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our passionate team of educators, entrepreneurs, and leaders work
            together to make SAGE's mission a reality in communities around the
            world.
          </p>
        </div>

        {/* Team grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-border bg-secondary p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-border transition-colors group-hover:border-primary">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Portrait of ${member.name}`}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
