import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Learning CSIT340"
        />
        <TimelineItem
          period="2025"
          title="OJT"
          place="Skyrise"
          description="Help with necessary task needed"
        />
        <TimelineItem
          period="2022 – 2024"
          title="High School"
          place="Don Bosco Technical College"
          description="Built my scratch program and got hooked."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection