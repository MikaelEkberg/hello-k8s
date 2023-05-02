import { Flex, FlexProps } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex as="footer" bottom={0} py={3} position="fixed" {...props} />
)
