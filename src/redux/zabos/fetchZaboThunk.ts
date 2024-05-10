import axios from "axios";
import dayjs from "dayjs";
import type { AppDispatch } from "@/redux/store";
import { ZaboState, type ZaboJson } from "@/types";
import { API_SERVER_URL } from "@/config";
import { pushZabos } from "./zaboSlice";

const ZABO_SHARE_URL = `${API_SERVER_URL}/s/`;

export const fetchZaboThunk = () => async (dispatch: AppDispatch) => {
  // attach timestamp to image url to prevent browser cache
  // this leads to animation crash
  // also prevent duplicate keys of components
  const timestamp = new Date().getTime();
  const postFix = (idx: number) =>
    "".concat("?t=", `${timestamp}`, "&idx=", `${idx}`);

  // fetch zabos from server
  // single board list get api gets 20 zabos
  let zabosData: ZaboJson[] = [];
  const lastFetched =
    zabosData.length > 0 ? zabosData[zabosData.length - 1].id : null;

  // fetch zabos based on lastSeen(lastFetched)
  const { data } =
    lastFetched === null
      ? await axios.get("/api/board/list")
      : await axios.get("/api/board/list", {
          params: {
            lastSeen: lastFetched,
          },
        });

  // parse fetched zabos to ZaboJson
  // remove unnecessary fields
  // add state field
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const parsedZabos = data.map((zabo: any, index: number) => {
    const { title, description, likesCount, views, score, effectiveViews, showBoard } =
      zabo;
    /* eslint-disable-next-line no-underscore-dangle */
    const id = zabo._id;
    const likes = likesCount;
    const owner = zabo.owner.name;
    const scheduleType =
      zabo.schedules.length > 0 ? zabo.schedules[0].eventType : null;
    const scheduleDate =
      zabo.schedules.length > 0
        ? dayjs(zabo.schedules[0].startAt).format("MM.DD")
        : null;
    const qrUrl = "".concat(ZABO_SHARE_URL, id.substring(id.length - 6));
    const imageUrl =
      zabo.photos.length > 0 ? zabo.photos[0].url + postFix(index) : null;
    const state = ZaboState.PENDING_STATE;

    return {
      id,
      title,
      owner,
      description,
      scheduleType,
      scheduleDate,
      qrUrl,
      imageUrl,
      state,
      likes,
      views,
      score,
      effectiveViews,
      showBoard
    };
  });

  zabosData = zabosData.concat(parsedZabos);

  // we have to remove zabos that have no image url
  zabosData = zabosData.filter(
    (zabo: ZaboJson) => zabo.imageUrl !== null && zabo.showBoard !== false,
  );
  console.log(zabosData);

  dispatch(pushZabos(zabosData));
};
