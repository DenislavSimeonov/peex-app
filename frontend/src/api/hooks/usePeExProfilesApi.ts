import _ from 'lodash';
import useFetch from 'hooks/useFetch';
import { useSettings } from 'hooks/useSettings';
import { ProfileFromStrapi, ProfileTransformed } from './types';

const usePeExProfilesApi = () => {
  const { settings } = useSettings();

  const {
    loading,
    error,
    data = [],
  } = useFetch(`${process.env.REACT_APP_BACKEND}profiles?locale=${settings?.language}`);

  const profiles = data?.map(
    (profile: ProfileFromStrapi): ProfileTransformed => ({
      id: profile.id,
      subType: profile.attributes.subType,
      title: profile.attributes.title,
      type: profile.attributes.type,
    }),
  );

  return { loading, error, data: _.sortBy(profiles, ['title']) };
};

export default usePeExProfilesApi;
