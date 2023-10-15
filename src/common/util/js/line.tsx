export const MultiLineBreak = (props: { lines: number }): JSX.Element => {
  const breakList = [];
  for (let i = 0; i < props.lines; i++) {
    breakList.push(<br></br>);
  }
  return <>{breakList}</>;
};
