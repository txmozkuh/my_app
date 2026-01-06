import Contact from '@/components/blocks/contact'
import Experience from '@/components/blocks/experience'
import Hero from '@/components/blocks/hero'
import Tag from '@/components/ui/tag'

const Blocks = () => {
  return (
    <div className='[&>section:nth-child(odd)]:bg-a-black [&>section]:rounded-b-xl relative'>
      <Hero />
      <Contact />
      <Experience />
      <Tag />
    </div>
  )
}

export { Blocks }
