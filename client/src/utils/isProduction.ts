const isProduction = (): boolean => {
  console.log(process.env.NODE_ENV !== 'development');
  if (process.env.NODE_ENV !== 'development') return true;
  return false;
};

export default isProduction;
