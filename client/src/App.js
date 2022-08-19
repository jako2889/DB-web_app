import { useState } from 'react';

// HOOKS
import { useCalculation } from './hooks/useCalculation';

// COMPONENTS
import Layout from './components/Layout/Layout';
import InputWithButton from './components/InputWithButton/InputWithButton';
import Modal from './components/Modal/Modal';

// STYLES
import './styles/globals.scss';

// SPINNERS
import BarLoader from "react-spinners/BarLoader";
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  // STATE
  const [input, setInput] = useState('');
  const [validationError, setValidationError] = useState({
    error: false,
    message: ''
  });

  // HOOKS
  const { calculateFacilityExposure, error, loading, data, reset } = useCalculation();
  
  if (error) return <ErrorMessage error={error} back={reset} />;

  const handleCalculations = () => {
    if(input.length === 0) return setValidationError({  error: true, message: 'You must add a number.'} );
    // call mutate function to execute the mutation
    calculateFacilityExposure({ variables: { input:  parseInt(input) } });
    // reset input field
    setInput('');
  }

  const handleChange = (value) => {
    setInput(value);
    if(!/^[0-9]{0,10}$/.test(value)) {
      return setValidationError({  error: true, message: 'Must be under 10 characters.'} );
    }
    if(value.length === 0) {
      return setValidationError({  error: true, message: 'You must add a number.'} );
    }
    return setValidationError({  error: false, message: ''} );
  }

  return (
    <Layout>
      {loading ? <div><BarLoader color="#105DE8" loading={loading} cssOverride={{ marginTop: 100 }} size={150} /></div> : (
          <>
            <h2>Simple web application</h2>
            <p>Below you can add a number which will calculate a series of endpoints. The calculation and result will be displayed when you press the button.</p>
            <InputWithButton
              type="number"
              value={input}
              placeholder="Write a random number"
              label="Number"
              name="number"
              onChange={e => handleChange(e.target.value)}
              action={handleCalculations}
              btnText="Calculate"
              validationError={validationError} />
          </>
      )}
      {data && <Modal close={reset} data={data.calculateFacilityExposure} />}
    </Layout>
  );
}

export default App;
