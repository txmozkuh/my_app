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

export const SECTIONS = {
  hero: Hero,
  contact: Contact,
  craft: Craft,
}

const Sections = () => {
  const activeSection = useActiveSection(0.3)
  const sections = Object.keys(SECTIONS) as Array<keyof typeof SECTIONS>
  return (
    <div className='relative'>
      {sections.map((name, key) => {
        const Section = SECTIONS[name]
        return (
          <SectionWrapper
            key={key}
            data-slot={`section-${name}`}
            id={name}
            className={cn(
              'min-h-screen',
              key % 2 === 0 && 'bg-a-black',
              key === sections.length - 1 && 'rounded-b-3xl'
            )}
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
