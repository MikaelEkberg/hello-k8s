# hello-k8s

This example app can be deployed to a Kubernetes cluster to show the following information about the running pod:

- Namespace
- Pod name
- Node name

## Image documentation

The web app is created with Next.js and chakra-ui. It uses the following environment variables to get the pod details:

- K8S_NAMESPACE
- K8S_POD
- K8S_NODE

If the environment variables are not set, the web app will display the value **Unknown**
