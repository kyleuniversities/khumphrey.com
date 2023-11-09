export const getResourceUrl = (key: string): string => {
  return process.env['REACT_APP_RESOURCE_URL'] + '/' + key;
};
