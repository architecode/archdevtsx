import * as React from "react";

export interface SampleProps {
  name: string;
}

const Sample: React.SFC<SampleProps> = props => (
  <div>Sample: {props.name}</div>
);

export default Sample;
