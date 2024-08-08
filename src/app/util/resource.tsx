/**
 * Utility method for getting the url of a resource
 */
export const getResourceUrl = (key: string): string => {
  return `${getResourceRepositoryUrl()}/${key}`;
};

/**
 * Utility method for getting the url of a resource set to be
 * retrieved quickly
 */
export const getQuickResourceUrl = (key: string): string => {
  return `${window.location.origin}/${key}`;
};

/**
 * Method to collect resource repository url
 */
const getResourceRepositoryUrl = (): string => {
  if (
    process.env['REACT_APP_IS_USING_LOCAL_RESOURCES'] &&
    process.env['REACT_APP_IS_USING_LOCAL_RESOURCES'] === 'true'
  ) {
    return window.location.origin;
  }
  return 'https://kyleuniversities-file-bucket-69125.s3.us-west-1.amazonaws.com';
};
