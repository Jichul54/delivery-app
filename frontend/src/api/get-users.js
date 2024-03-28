import { MyProxy } from './proxy';

export async function getUsers() {
  try {
    const params = { role_id: 1};
    const query = new URLSearchParams(params);
    const response = await fetch(MyProxy + 'users?' + query);

    const data = await response.json();

    if (response.status === 200) {
      // 成功した場合の処理
      console.log('テスト成功:', data);
      return data; // 成功データを返す
    } else {
      // 失敗した場合の処理
      console.error('テスト失敗:', data);
      return null; // 失敗時にはnullを返すか、エラーを投げる
    }
  } catch (error) {
    // ネットワークエラーやリクエスト失敗時の処理
    console.error('通信エラー:', error);
    throw error; // エラーを投げて、呼び出し元のコンポーネントで処理をする
  }
}
