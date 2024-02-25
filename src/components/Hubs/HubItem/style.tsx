import styled from "@emotion/styled";

export const HubItemContainer = styled.div({
  padding: "16px 32px",
  borderRadius: 5,
  margin: "16px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

export const HubItemHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export const HubItemNameSection = styled.p({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "16px",
  strong: {
    fontSize: "1rem",
  },
  img: {
    objectFit: "cover",
  },
});

export const HubItemDescription = styled.p({
  opacity: 0.8,
  fontSize: "0.75rem",
});
