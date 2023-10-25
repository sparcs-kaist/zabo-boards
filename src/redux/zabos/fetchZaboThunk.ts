import { ZaboState } from "@/components/Zabo";
import { pushZabos } from "./zaboSlice";

export const fetchZaboThunk = () => async dispatch => {
  await fetch("http://localhost:5175");

  dispatch(
    pushZabos([
      {
        title: "자보",
        description: "설명",
        date: "date",
        qrUrl: "https://zabo.sparcs.org/s/86f104",
        imageUrl:
          "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471",
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "다음자보자보",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/86f104",
        imageUrl:
          "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421694355488272",
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "다음자보자보",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/17e13c",
        imageUrl:
          "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136491694517783550",
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "다음자보자보",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/86f104",
        imageUrl:
          "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421694355488272",
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "다음자보자보",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/17e13c",
        imageUrl:
          "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136491694517783550",
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "다음자보자보",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/86f104",
        imageUrl:
          "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421694355488272",
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "다음자보자보",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/17e13c",
        imageUrl:
          "https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136491694517783550",
        state: ZaboState.PENDING_STATE,
      },
    ]),
  );
};
