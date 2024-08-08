import { Grid } from 'semantic-ui-react';

/**
 * Component for one or more line breaks
 */
export const MultiLineBreak = (props: { lines: number }): JSX.Element => {
  const breakList = [];
  for (let i = 0; i < props.lines; i++) {
    breakList.push(<br></br>);
  }
  return <>{breakList}</>;
};

/**
 * Component for one or more line breaks in a new Grid Row
 */
export const GridRowMultiLineBreak = (props: {
  lines: number;
}): JSX.Element => {
  return (
    <Grid.Row>
      <MultiLineBreak lines={props.lines} />
    </Grid.Row>
  );
};
