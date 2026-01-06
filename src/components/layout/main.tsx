import { ComponentProps } from 'react'

type LayoutMainProps = ComponentProps<'main'>

const LayoutMain = ({ children }: LayoutMainProps) => {
  return <main id='site-content'>{children}</main>
}

export default LayoutMain
