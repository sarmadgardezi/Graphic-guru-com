import { Heading, SlideFade } from '@chakra-ui/react'
import { DashDivider } from 'components/DashDivider'
import { Layout } from 'layout'
import { LinkTooltip } from './LinkTooltip'
import { Writing } from './Writing'

export const HomeLayout = () => (
  <Layout>
    <SlideFade in={true} offsetY="20px">
      <Heading
        as="h1"
        pt="8"
        fontSize={['32px', '48px', '64px']}
        lineHeight={1.2}
      >
        <LinkTooltip name="intro">Hi, I&apos;m Ross.</LinkTooltip> A product
        designer, full-stack engineer, and systems thinker that loves making
        things for the web.
      </Heading>
      <DashDivider my="60px" />
       <Writing />
     </SlideFade>
  </Layout>
)
