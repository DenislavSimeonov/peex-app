import _ from 'lodash';
import { useFetch, useSettings } from 'hooks';
import { UseFetchState, MaterialsFromStrapi, MaterialsTransformed } from './types';

const useMaterialsByCompetencyIdApi = (
  userId?: string,
  profileId?: string,
  competencyId?: string,
) => {
  const { settings } = useSettings();
  const skip = !userId || !profileId || !competencyId;

  const { loading, error, data, forceFetching }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}materials?locale=${settings?.language}&filters[users_permissions_user][id][$eq]=${userId}&filters[profile][id][$eq]=${profileId}&filters[competency][id][$eq]=${competencyId}&populate[0]=job`,
    { skip },
  );

  const materials = data?.map((materials: MaterialsFromStrapi): MaterialsTransformed => {
    return {
      id: materials.id,
      materials: materials.attributes.materials,
      jobId: materials.attributes.job.data.id,
    };
  });

  return { loading, error, data: materials, forceFetching };
};

export default useMaterialsByCompetencyIdApi;
