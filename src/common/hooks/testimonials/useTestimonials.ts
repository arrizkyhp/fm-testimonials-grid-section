import { useQuery } from '@tanstack/react-query';

import { getTestimonialsData } from '~/services/main';

const useTestimonials = () => {
  const { isLoading, data: dataTestimonial } = useQuery(
    ['data-testimonial'],
    getTestimonialsData,
    {
      refetchOnWindowFocus: false,
    }
  );
  const responseDataTestimonial = dataTestimonial?.data?.payload;

  return {
    isLoading,
    responseDataTestimonial,
  };
};

export { useTestimonials };
