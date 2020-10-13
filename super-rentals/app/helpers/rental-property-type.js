import {helper} from '@ember/component/helper';

const communityPropTypes = [
  'Condo',
  'Townouse',
  'Apartment',
]

export function rentalPropertyType([propertyType]) {
  if (communityPropTypes.includes(propertyType)) {
    return 'Community';
  } else {
    return 'Standalone'
  }
}

export default helper(rentalPropertyType);
