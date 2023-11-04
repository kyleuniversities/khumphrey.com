import { ReactNode } from 'react';

export const ConditionalContent = (props: {
  condition: boolean;
  children: ReactNode;
}): JSX.Element => {
  return <>{props.condition ? props.children : <></>}</>;
};
