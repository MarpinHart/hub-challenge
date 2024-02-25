import { HubRecovery } from "../Hubs/types";
import { useMemo } from "react";
import {
  BorderLinearProgress,
  ProgressContainer,
  ProgressLabel,
  ProgressLabelWrapper,
} from "./style";

type HubItemProps = {
  hub: HubRecovery;
};

const ProgressBar: React.FC<HubItemProps> = ({ hub }) => {
  const progressPercentage: string = useMemo(
    () =>
      (
        (hub.totalRecoveredQuantity /
          (hub.totalRecoveredQuantity + hub.unassignedQuantityTotal)) *
        100
      ).toFixed(0),
    [hub]
  );

  return (
    <ProgressContainer>
      <ProgressLabelWrapper>
        <ProgressLabel>
          <span>Recovered:</span>
          <strong>
            {hub.formattedTotalRecoveredQuantity + hub.recoveredQuantityUnit}
          </strong>
        </ProgressLabel>
        <strong style={{ fontSize: "1.5rem" }}>{progressPercentage} %</strong>
        <ProgressLabel>
          <span>Remaining:</span>
          <strong>
            {hub.unassignedQuantityTotal.toLocaleString("en-US", {
              maximumFractionDigits: 0,
            }) + hub.recoveredQuantityUnit}
          </strong>
        </ProgressLabel>
      </ProgressLabelWrapper>
      <BorderLinearProgress
        variant="determinate"
        value={Number(progressPercentage)}
      />
    </ProgressContainer>
  );
};
export { ProgressBar };
