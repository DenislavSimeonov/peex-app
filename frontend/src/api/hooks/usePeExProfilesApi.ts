import _ from 'lodash';
import { useFetch, useSettings } from 'hooks';
import { ProfileFromStrapi, ProfileTransformed } from './types';

const usePeExProfilesApi = (userId?: string) => {
  const skip = !userId;
  const { settings } = useSettings();

  const {
    loading,
    error,
    data = [],
  } = useFetch(
    `${process.env.REACT_APP_BACKEND}profiles?locale=${settings?.language}&filters[users_permissions_users][id][$contains]=${userId}`,
    { skip },
  );

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
