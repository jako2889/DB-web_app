import { gql, useMutation } from '@apollo/client';

const CALCULATE_FACILITY_EXPOSURE = gql`
mutation calculateFacilityExposure($input: Int) {
  calculateFacilityExposure(input: $input) {
    val3
    val5
    calculatedValue
  }
}
`;

export const useCalculation = () => {
    const [calculateFacilityExposure, { error, loading, data, reset }] = useMutation(CALCULATE_FACILITY_EXPOSURE);

    return { calculateFacilityExposure, error, loading, data, reset }
}