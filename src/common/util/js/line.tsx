import { Grid } from 'semantic-ui-react';

export const MultiLineBreak = (props: { lines: number }): JSX.Element => {
  const breakList = [];
  for (let i = 0; i < props.lines; i++) {
    breakList.push(<br></br>);
  }
  return <>{breakList}</>;
};

export const GridRowMultiLineBreak = (props: {
  lines: number;
}): JSX.Element => {
  return (
    <Grid.Row>
      <MultiLineBreak lines={props.lines} />
    </Grid.Row>
  );
};
