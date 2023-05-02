import {
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
  Alert,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { SiKubernetes } from 'react-icons/si'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'

const Index = ({k8sNamespace, k8sPod, k8sNode}) => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Hero />
    <Main>
      <Stack spacing={3}>
        <Alert status='info'>
          <SiKubernetes size={45} />
          <Text px={2}>Simple Next.js app to display Kubernetes details.</Text>
        </Alert>
        
        <List spacing={3} px={10} my={0} color="text">
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
              Namespace: <Code>{k8sNamespace}</Code>
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
              Pod: <Code>{k8sPod}</Code>
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
              Node: <Code>{k8sNode}</Code>
          </ListItem>
        </List>
      </Stack>
    </Main>
    <Footer>
      <Text>⚓</Text>
    </Footer>
  </Container>
)

export async function getServerSideProps() {
  const defaultK8sString = "Unknown"
  let k8sNamespace = global.process.env.K8S_NAMESPACE
  let k8sPod = global.process.env.K8S_POD
  let k8sNode = global.process.env.K8S_NODE

  k8sNamespace = k8sNamespace || defaultK8sString
  k8sPod = k8sPod || defaultK8sString
  k8sNode = k8sNode || defaultK8sString

  return { 
    props: {
      k8sNamespace,
      k8sPod,
      k8sNode
    } 
  }
}

export default Index
