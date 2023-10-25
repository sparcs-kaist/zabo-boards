import type { AppDispatch } from "@/redux/store";
import { ZaboState } from "@/types";
import { pushZabos } from "./zaboSlice";

export const fetchZaboThunk = () => async (dispatch: AppDispatch) => {
  await fetch("http://localhost:5175");

  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  dispatch(
    pushZabos([
      {
        title: "33333333333",
        description: "설명",
        date: "date",
        qrUrl: "https://zabo.sparcs.org/s/86f104",
        imageUrl: `https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=${
          timestamp + 10
        }`,
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "444444444444",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/86f104",
        imageUrl: `https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=${
          timestamp + 22
        }`,
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "555555555555",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/17e13c",
        imageUrl: `https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=${
          timestamp + 33
        }`,
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "666666",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/17e13c",
        imageUrl: `https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=${
          timestamp + 44
        }`,
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "777777777",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/17e13c",
        imageUrl: `https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=${
          timestamp + 55
        }`,
        state: ZaboState.PENDING_STATE,
      },
      {
        title: "888888",
        description: "다음자보설명",
        date: "다음date",
        qrUrl: "https://zabo.sparcs.org/s/17e13c",
        imageUrl: `https://sparcs-kaist-zabo-prod.s3.ap-northeast-2.amazonaws.com/zabo/zabo-136421683085229471?a=${
          timestamp + 66
        }`,
        state: ZaboState.PENDING_STATE,
      },
    ]),
  );
};
