export interface Thumbnail {
  url: string;
  description: string;
}

export interface Feature {
  icon: string;
  description: string;
}

export interface CreatedBy {
  userThumb: string;
  tag: string;
}

export interface OwnedBy {
  userThumb: string;
  tag: string;
}

export interface Item {
  id: string;
  collection: string;
  content: string[];
  createdBy: CreatedBy[];
  edition: string;
  features: Feature[];
  ownedBy: OwnedBy[];
  preview: string;
  state: string;
  thumbnails: Thumbnail[];
  title: string;
}
