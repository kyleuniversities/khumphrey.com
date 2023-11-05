import { ReactNode } from 'react';

/**
 * Container for centering content
 */
export const CenteredContainer = (props: {
  children: ReactNode;
}): JSX.Element => {
  return <div className="centeredContainer">{props.children}</div>;
};
