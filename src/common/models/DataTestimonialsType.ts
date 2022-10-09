export type DataTestimonialsType = {
  payload: {
    totalItem: number;
    items: Array<{
      id: number;
      name: string;
      occupation: string;
      title: string;
      testimonial: string;
    }>;
    attribution: {
      id: number;
      name: string;
      url: string;
    };
  };
};
