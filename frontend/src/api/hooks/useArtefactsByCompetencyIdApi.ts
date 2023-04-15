import _ from 'lodash';
import { useFetch, useSettings } from 'hooks';
import { UseFetchState } from './types';

const useArtefactsByCompetencyIdApi = (
  userId?: string,
  profileId?: string,
  competencyId?: string,
) => {
  const { settings } = useSettings();
  const skip = !userId || !profileId || !competencyId;

  const { loading, error, data }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}artefacts?locale=${settings?.language}&filters[users_permissions_user][id][$eq]=${userId}&filters[profile][id][$eq]=${profileId}&filters[competency][id][$eq]=${competencyId}`,
    { skip },
  );

  return { loading, error, data };
};

export default useArtefactsByCompetencyIdApi;
