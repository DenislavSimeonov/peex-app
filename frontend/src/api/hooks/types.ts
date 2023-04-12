import { ErrorType } from 'global/types';

type ProfileAttributes = {
  title: string;
  subType: string;
  type: string;
};
type SectionsAttributes = {
  title: string;
  profile?: string;
  competencies: {
    data: CompetenciesFromStrapi[];
  };
};
type CompetenciesAttributes = {
  title: string;
};
type JobsAttributes = {
  title: string;
  isKey: boolean;
  level: string;
};

export type ProfileFromStrapi = {
  id: number;
  attributes: ProfileAttributes;
};
export type SectionsFromStrapi = {
  id: number;
  attributes: SectionsAttributes;
};
export type CompetenciesFromStrapi = {
  id: number;
  attributes: CompetenciesAttributes;
};
export type JobsFromStrapi = {
  id: number;
  attributes: JobsAttributes;
};

export type ProfileTransformed = ProfileAttributes & {
  id: number;
};
export type SectionsTransformed = {
  id: number;
  title: string;
  profile?: string;
  competencies: {
    id: number;
    title: string;
  }[];
};
export type CompetenciesTransformed = CompetenciesAttributes & {
  id: number;
};
export type JobsTransformed = JobsAttributes & {
  id: number;
};

export type UseFetchState = {
  error: ErrorType | null;
  loading: boolean;
  data: any;
};
