/**
 * 自定义滚动条
 *
 * @param {HTMLElement} out 滚动的容器.
 * @param {HTMLElement} con 滚动的内容.
 * @param {HTMLElement} box 滚动条容器.
 * @param {HTMLElement} drag 滚动条按钮.
 * @returns
 */
export function initScroll(out, con, box, drag) {
  if (!out || !con || !box || !drag) {
    return false;
  }
  const heightPercen = (out.clientHeight / con.clientHeight).toFixed(2);
  if (heightPercen >= 1) {
    drag.style.display = 'none';
  }
  drag.style.height = (box.clientHeight * heightPercen) + 'px';

  drag.onmousedown = ev => {
    let e = ev || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    const d_bkt = e.clientY - drag.offsetTop;
    document.onmousemove = evo => {
      e = evo || window.event;
      let top = e.clientY - d_bkt;
      if (top <= 0) {
        top = 0;
      }
      if (top >= box.clientHeight - drag.clientHeight) {
        top = box.clientHeight - drag.clientHeight;
      }
      const scale = top / (box.clientHeight - drag.clientHeight);
      const cony = scale * (con.clientHeight - out.clientHeight);
      drag.style.top = top + 'px';
      con.style.top = -cony + 'px';
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  };
  const str = window.navigator.userAgent.toLowerCase();
  if (str.indexOf('firefox') !== -1) { // 火狐浏览器
    out.addEventListener('DOMMouseScroll', (e) => {
      e.preventDefault();// 阻止窗口默认的滚动事件
      let t;
      let scale;
      let top;
      if (e.detail < 0) {
        t = con.offsetTop + 20;
        if (t >= 0) {
          t = 0;
        }
        if (t <= -(con.clientHeight - out.clientHeight)) {
          t = -(con.clientHeight - out.clientHeight);
        }
        scale = t / (con.clientHeight - out.clientHeight);
        top = scale * (box.clientHeight - drag.clientHeight);
        con.style.top = t + 'px';
        drag.style.top = -top + 'px';
      }
      if (e.detail > 0) {
        t = con.offsetTop - 20;
        if (t >= 0) {
          t = 0;
        }
        if (t <= -(con.clientHeight - out.clientHeight)) {
          t = -(con.clientHeight - out.clientHeight);
        }
        scale = t / (con.clientHeight - out.clientHeight);
        top = scale * (box.clientHeight - drag.clientHeight);
        con.style.top = t + 'px';
        drag.style.top = -top + 'px';
      }
    }, false);
  } else { // 非火狐浏览器
    out.onmousewheel = ev => {
      const e = ev || window.event;
      let t;
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      if (e.wheelDelta > 0) {
        t = con.offsetTop + 20;
        if (t >= 0) {
          t = 0;
        }
        if (t <= -(con.clientHeight - out.clientHeight)) {
          t = -(con.clientHeight - out.clientHeight);
        }
        const scale = t / (con.clientHeight - out.clientHeight);
        const top = scale * (box.clientHeight - drag.clientHeight);
        con.style.top = t + 'px';
        drag.style.top = -top + 'px';
      }
      if (e.wheelDelta < 0) {
        t = con.offsetTop - 20;
        if (t >= 0) {
          t = 0;
        }
        if (t <= -(con.clientHeight - out.clientHeight)) {
          t = -(con.clientHeight - out.clientHeight);
        }
        const scale = t / (con.clientHeight - out.clientHeight);
        const top = scale * (box.clientHeight - drag.clientHeight);
        con.style.top = t + 'px';
        drag.style.top = -top + 'px';
      }
    };
  }
}

/**
 * 获取元素在文档中的位置
 *
 * @param {HTMLElement} elem 元素.
 * @returns {Array} 返回元素的位置信息
 */
export function pos(elem) {
  let x = elem.offsetLef;
  let y = elem.offsetTop;
  while (elem.offsetParent) {
    elem = elem.offsetParent;
    x += elem.offsetLeft;
    y += elem.offsetTop;
  }
  return [x, y];
}

/**
 * 下载歌曲
 *
 * @param {String} url url地址.
 * @returns
 */
export function downloadFile(url) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', 'true');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}