import { atom, useRecoilValue, useSetRecoilState, selector } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const loading = useRecoilValue(loadingState);

export const setLoading = useSetRecoilState(loadingState);

export const isLoading = selector({
  key: "isLoadingState",
  get: ({ get }) => {
    return loading;
  },
});
