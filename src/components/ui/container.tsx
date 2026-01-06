import { cn } from '@lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const containerVariants = cva(['max-w-330 px-5 mx-auto size-full'], {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ContainerProps
  extends ComponentProps<'div'>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

const Container = ({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: ContainerProps) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot='container'
      className={cn(containerVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Container, containerVariants }
