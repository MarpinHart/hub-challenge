import { useCallback, useState } from "react";
import { CircularProgress, Snackbar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { HubItem } from "./HubItem";
import { Filter, HubRecovery } from "./types";
import { Filters } from "src/components/Filter";

const initialFilter: Filter = {
  stage: "ALL",
  assignable: true,
  searchText: "",
};

const Hubs: React.FC = () => {
  const [filter, setFilter] = useState<Filter>(initialFilter);

  // The following could be moved to a context.
  const handleFilteringQuery = useCallback(
    (data: HubRecovery[]) => {
      const { stage, assignable, searchText } = filter;

      let filteredData = data.filter((hub: HubRecovery) =>
        assignable
          ? hub.category === "ASSIGNABLE"
          : hub.category === "PORTFOLIO"
      );

      if (searchText !== "" && searchText.length >= 3) {
        filteredData = filteredData.filter((hub: HubRecovery) =>
          hub.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      if (stage !== "ALL") {
        filteredData = filteredData.filter(
          (hub: HubRecovery) => hub.stage === stage
        );
      }

      return filteredData;
    },
    [filter]
  );

  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["hubs"],
    queryFn: () =>
      fetch("https://marketplace-demo.cleanhub.com/api/public/hubs").then(
        (res) => res.json()
      ),
    select: handleFilteringQuery,
  });

  if (isLoading) return <CircularProgress />;

  if (isError)
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isError}
        message={error.message}
        key={"error-snackbar"}
      />
    );

  return (
    <main>
      <Filters setFilter={setFilter} filter={filter} />
      {data?.map((hub: HubRecovery) => (
        <HubItem key={hub.uuid} hub={hub} />
      ))}
    </main>
  );
};

export default Hubs;
