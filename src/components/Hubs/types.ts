export interface HubRecovery {
  uuid: string;
  state: string;
  category: string;
  stage: string;
  name: string;
  displayName: string;
  slug: string;
  type: string;
  location: string;
  externalId?: string;
  recoveredQuantity: number;
  recoveredQuantityUnit: string;
  totalRecoveredQuantity: number;
  collectionAndSortingParagraph: string;
  pageMode: string;
  hubUnassignedRecoveryList: HubUnassignedRecovery[];
  referenceQuantityUnit: string;
  parentHubName?: string;
  logo: Image;
  cardDescription: string;
  cardImage: Image;
  thankYouNote?: string;
  portfolioAssignedQuantityPercentage?: number;
  unassignedQuantityPercentage: number;
  unassignedQuantityTotal: number;
  assignable: boolean;
  formattedRecoveredQuantity: string;
  formattedTotalRecoveredQuantity: string;
}

export interface HubUnassignedRecovery {
  uuid: string;
  createdAt: string;
  state: string;
  unassignedQuantity: number;
  assignedQuantity: number;
  quantityUnit: string;
}

export interface Image {
  uuid: string;
  directLink: string;
  thumbnailDirectLink: string;
  processedDirectLink?: string;
  processedThumbnailDirectLink?: string;
  fileName: string;
  size: number;
}

export interface Filter {
  stage: string;
  searchText: string;
  assignable: boolean;
}
