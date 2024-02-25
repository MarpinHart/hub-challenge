import { Button, Chip } from "@mui/material";
import { HubRecovery } from "src/components/Hubs/types";
import { ProgressBar } from "src/components/Progress";
import {
  HubItemContainer,
  HubItemDescription,
  HubItemHeader,
  HubItemNameSection,
} from "./style";

type HubItemProps = {
  hub: HubRecovery;
};

const HubItem: React.FC<HubItemProps> = ({ hub }) => {
  return (
    <HubItemContainer>
      <HubItemHeader>
        <HubItemNameSection>
          {hub.logo?.directLink && (
            <img
              src={hub.logo?.thumbnailDirectLink}
              alt={hub.logo.fileName}
              height={48}
              width={48}
            />
          )}
          <strong>{hub.displayName}</strong>
        </HubItemNameSection>
        <div style={{ marginTop: "16px" }}>
          <Chip
            label={hub.stage.replace("_", " ")}
            color="warning"
            variant="outlined"
            size="small"
          />
        </div>
      </HubItemHeader>

      {hub.category === "PORTFOLIO" && (
        <Chip
          label="PORTFOLIO"
          color="success"
          variant="outlined"
          size="small"
        />
      )}

      <HubItemDescription>{hub.cardDescription}</HubItemDescription>

      <ProgressBar hub={hub} />

      <Button href={`https://test.cleanhub.com/hub/${hub.slug}`}>
        See Details
      </Button>
    </HubItemContainer>
  );
};
export { HubItem };
