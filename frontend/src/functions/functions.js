// idで情報取得
export default function getValues(id_lis, document) {
  let values = Array(id_lis.length).fill('');
  for (let i=0; i<id_lis.length; i++) {
    if (!document.getElementById(id_lis[i])) {
      values[i] = '';
    } else {
      values[i] = document.getElementById(id_lis[i]).value;
    }
  }
  return values;
}

// ボタンクリック時に情報をオブジェクトに格納
export function buttonOnClick(userInfo, document) {
  let userInfo_obj = {};
  for (let i=0; i<userInfo.length; i++) {
    userInfo_obj[userInfo[i]] = getValues(userInfo, document)[i];
  }
  console.log(userInfo_obj);
  return userInfo_obj;
}