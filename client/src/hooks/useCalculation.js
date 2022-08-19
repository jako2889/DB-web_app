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

export const useCalculation = (input) => {
    const [calculateFacilityExposure, { error, loading, data, reset }] = useMutation(CALCULATE_FACILITY_EXPOSURE, {
        variables: {
            input: input
        }
    });

    return { calculateFacilityExposure, error, loading, data, reset }
}