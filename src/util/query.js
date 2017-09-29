import * as api from '../api';
import { downloadFile } from './dom';

/**
 * 下载歌曲
 *
 * @param {Number} id 歌曲id.
 * @returns
 */
export function download(id) {
  api.getMusicUrl(id).then(res => {
    if (res.data.code === 200) {
      const url = res.data.data[0].url;
      if (url) {
        downloadFile(url);
      }
    }
  });
}