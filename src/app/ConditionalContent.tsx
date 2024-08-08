import { ReactNode } from 'react';

/**
 * Utility component that renders only if a condition is true
 */
export const ConditionalContent = (props: {
  condition: boolean;
  children: ReactNode;
}): JSX.Element => {
  return <>{props.condition ? props.children : <></>}</>;
};
