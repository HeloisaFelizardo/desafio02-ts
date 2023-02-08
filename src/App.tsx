import { Flex } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <Flex direction={'column'} bg='#9413dc' align={'center'} border={'1px solid'} minH='100vh'>

      <Layout children={Card()} />

    </Flex>
  );
}

export default App;
