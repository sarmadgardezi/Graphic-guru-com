import { Box, Link, Flex } from '@chakra-ui/react'
import { DashDivider } from '../DashDivider'

interface ItemProperties {
  href: string
  label: React.ReactNode
}

const Item = ({ href, label }: ItemProperties) => (
  <Link href={href} _hover={{ color: 'primary' }}>
    {label}
  </Link>
)

export const Footer = () => (
  <Box maxW="5xl" marginX="auto" as="footer">
    <DashDivider mt="80px" mb="24px" />
    <Flex gap="12px" wrap="wrap" fontSize="sm">
      <Item
        aria-label="Send email"
        href="mailto:ross@rossmoody.com"
        label="Email"
      />
      /
      <Item
        aria-label="Navigate to Dribbble Profile"
        href="https://dribbble.com/_rossmoody"
        label="Dribbble"
      />
      /
      <Item
        aria-label="Navigate to Twitter Profile"
        href="https://www.twitter.com/_rossmoody"
        label="Twitter"
      />
      /
      <Item
        aria-label="Navigate to GitHub Profile"
        href="https://www.github.com/rossmoody"
        label="GitHub"
      />
      /
      <Item
        aria-label="Navigate to LinkedIn Profile"
        href="https://www.linkedin.com/in/moodyrooster/"
        label="LinkedIn"
      />
    </Flex>
  </Box>
)
