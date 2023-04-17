import { useFetch, useSettings } from 'hooks';
import { UseFetchState, ArtefactFromStrapi, ArtefactTransformed } from './types';

const useArtefactsByCompetencyIdApi = (
  userId?: string,
  profileId?: string,
  competencyId?: string,
) => {
  const { settings } = useSettings();
  const skip = !userId || !profileId || !competencyId;

  const { loading, error, data, forceFetching }: UseFetchState = useFetch(
    `${process.env.REACT_APP_BACKEND}artefacts?locale=${settings?.language}&filters[users_permissions_user][id][$eq]=${userId}&filters[profile][id][$eq]=${profileId}&filters[competency][id][$eq]=${competencyId}&populate[0]=job`,
    { skip },
  );

  const artefacts = data?.map((artefact: ArtefactFromStrapi): ArtefactTransformed => {
    return {
      id: artefact.id,
      artefact: artefact.attributes.artefact,
      task: artefact.attributes.task,
      jobId: artefact.attributes.job.data.id,
    };
  });

  return { loading, error, data: artefacts, forceFetching };
};

export default useArtefactsByCompetencyIdApi;
