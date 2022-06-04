import { useRequest } from 'ahooks';
import { useCallback } from 'react';

import { getUserApi } from '../../services/api/api';

export const useStore = () => {
  // 获取用户信息demo
  const getUserRequest = useRequest(getUserApi, {
    manual: true,
    onSuccess: result => {
      console.log(result);
    },
    onError: error => {
      console.log('error');
    },
  });

  const onGetUser = useCallback(async () => {
    await getUserRequest.run(1);
  }, [getUserRequest]);

  return { onGetUser };
};
