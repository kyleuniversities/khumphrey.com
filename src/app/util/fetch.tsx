/**
 * Utility method for retrieving text from a resource
 */
export const fetchText = (url: string, then: (text: string) => void): void => {
  fetch(url)
    .then((res) => res.text())
    .then(then);
};

/**
 * Utility method for retrieving json from a resource
 */
export const fetchJson = (url: string, then: (res: any) => void): void => {
  fetch(url)
    .then((res) => res.json())
    .then(then);
};
