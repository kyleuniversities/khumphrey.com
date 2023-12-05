/**
 * Utility method for getting the url of a resource
 */
export const getResourceUrl = (key: string): string => {
  return `${window.location.origin}/${key}`;
  //return `https://kyleuniversities-file-bucket-69125.s3.us-west-1.amazonaws.com/${key}`;
};

/**
 * Utility method for getting the url of a resource set to be
 * retrieved quickly
 */
export const getQuickResourceUrl = (key: string): string => {
  return `${window.location.origin}/${key}`;
};
