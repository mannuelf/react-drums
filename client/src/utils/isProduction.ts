const isProduction = (): boolean => {
  if (process.env.NODE_ENV === 'development') return false;
  return true;
};

export default isProduction;
