import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:serraineirbenedict.macailing@cit.edu"  text="serraineirbenedict.macailing@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/Macailing"  text="github.com/Macailing" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/Macailing"  text="linkedin.com/in/Macailing" />
      </ul>
    </section>
  )
}

export default ContactSection