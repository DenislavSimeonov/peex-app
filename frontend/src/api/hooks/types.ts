import { ErrorType, ObjectType } from 'global/types';

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
type ArtefactAttributes = {
  task: string;
  artefact: string;
  job: {
    data: JobsFromStrapi;
  };
};
type MaterialsAttributes = {
  materials: string;
  job: {
    data: JobsFromStrapi;
  };
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
export type ArtefactFromStrapi = {
  id: number;
  attributes: ArtefactAttributes;
};
export type MaterialsFromStrapi = {
  id: number;
  attributes: MaterialsAttributes;
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
export type ArtefactTransformed = {
  id: number;
  task: string;
  artefact: string;
  jobId: number;
};
export type MaterialsTransformed = {
  id: number;
  materials: string;
  jobId: number;
};

export type useConstantsType = {
  [key: string]: any;
};

export type UseFetchState = {
  error: ErrorType | null;
  loading: boolean;
  data: any;
  forceFetching: () => void;
};

export type usePostPutState = {
  error: ErrorType | null;
  loading: boolean;
  success: boolean;
  postPutData: (data: ObjectType) => void;
};
