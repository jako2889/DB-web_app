import { useState } from 'react';

// HOOKS
import { useCalculation } from './hooks/useCalculation';

// COMPONENTS
import Layout from './components/Layout/Layout';
import Input from './components/Input';
import Modal from './components/Modal/Modal';

function App() {
  // HOOKS
  const { calculateFacilityExposure, error, loading, data, reset } = useCalculation();
  // STATE
  const [input, setInput] = useState('');
  
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Layout>
      {data && <Modal close={reset} data={data.calculateFacilityExposure} />}
        <Input
         type="number"
         value={input}
         placeholder="Write a number"
         label="Number"
         name="number"
         onChange={e => setInput(e.target.value)}
       />
        <button type="button" onClick={() => calculateFacilityExposure({ variables: { input:  parseInt(input) } })}>Add number</button>
    </Layout>
  );
}

export default App;
