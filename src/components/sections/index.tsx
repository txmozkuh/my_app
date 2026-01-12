'use client'
import Contact from '@/components/sections/contact'
import Craft from '@/components/sections/craft'
import Hero from '@/components/sections/hero'
import Tag from '@/components/ui/tag'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'

export interface SectionWrapperProps extends ComponentProps<'section'> {
  asChild?: boolean
}

const SectionWrapper = ({ className, asChild = false, ...props }: SectionWrapperProps) => {
  const Comp = asChild ? Slot : 'section'

  return <Comp className={cn('', className)} {...props} />
}

export const sections = {
  hero: Hero,
  contact: Contact,
  craft: Craft,
}

const Sections = () => {
  const activeSection = useActiveSection(0.3)

  return (
    <div className='relative'>
      {(Object.keys(sections) as Array<keyof typeof sections>).map((name, key) => {
        const Section = sections[name]
        return (
          <SectionWrapper
            key={key}
            data-slot={`section-${name}`}
            id={name}
            className={cn('min-h-screen', key % 2 === 0 && 'bg-a-black')}
          >
            <Section />
          </SectionWrapper>
        )
      })}
      <Tag activeSection={activeSection} />
    </div>
  )
}

export { Sections, SectionWrapper }
