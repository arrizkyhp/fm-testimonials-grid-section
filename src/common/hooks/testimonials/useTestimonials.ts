import { useQuery } from '@tanstack/react-query';

import { getTestimonialsData } from '~/services/main';

const useTestimonials = () => {
  const { data: dataTestimonial } = useQuery(
    ['data-testimonial'],
    getTestimonialsData,
    {
      refetchOnWindowFocus: false,
    }
  );
  const responseDataTestimonial = dataTestimonial?.data?.payload;

  return {
    responseDataTestimonial,
  };
};

export { useTestimonials };
