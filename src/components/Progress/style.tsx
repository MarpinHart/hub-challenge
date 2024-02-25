import styled from "@emotion/styled";
import { LinearProgress } from "@mui/material";

export const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 64,
  position: "absolute",
  width: "100%",
  top: 0,
  borderRadius: 5,
}));

export const ProgressContainer = styled.section({
  position: "relative",
  width: "100%",
  margin: "8px 0",
  height: 72,
});

export const ProgressLabelWrapper = styled.div({
  display: "flex",
  height: 64,
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  width: "100%",
  zIndex: 2,
  position: "relative",
});

export const ProgressLabel = styled.div({
  padding: "8px 16px",
  display: "flex",
  flexDirection: "column",
  span: {
    fontSize: "0.75rem",
  },
  strong: {
    fontSize: "1rem",
  },
});
