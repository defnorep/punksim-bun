export const Time = (props: { datetime?: Date }) => (
  <div id="time">{props.datetime?.toUTCString() || "No Socket"}</div>
);
