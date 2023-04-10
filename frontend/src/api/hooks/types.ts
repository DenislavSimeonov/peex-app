type Attributes = {
  title: string;
  locale: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type StrapiData = {
  id: number;
  attributes: Attributes;
};

export type TransformedStrapiData = {
  id: number;
  locale: string;
  title: string;
};

export type StrapiProfileData = {
  id: number;
  attributes: Attributes & {
    subType: string;
    type: string;
  };
};

export type TransformedProfileStrapiData = TransformedStrapiData & {
  subType: string;
  type: string;
};

export type StrapiJobData = {
  id: number;
  attributes: Attributes & {
    isKey: boolean;
  };
};

export type TransformedJobStrapiData = TransformedStrapiData & {
  isKey: boolean;
};

export type UseFetchState = {
  loading: boolean;
  error: any;
  data: any;
};
