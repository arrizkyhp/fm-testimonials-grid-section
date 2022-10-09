import { getRequest } from '../base';

const getTestimonialsData = async () => {
  return getRequest('testimonials');
};

export { getTestimonialsData };
