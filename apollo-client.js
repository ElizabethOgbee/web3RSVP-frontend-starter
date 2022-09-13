import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/[ElizabethOgbee]/[https://thegraph.com/hosted-service/subgraph/elizabethogbee/rumbling-rsvp]",
  cache: new InMemoryCache(),
});

export default client;