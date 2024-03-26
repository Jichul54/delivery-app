import { MyProxy } from "./proxy";

export async function postLoginInfo(email, password) {
  try {
    console.log(MyProxy + 'token');
    console.log(email, password);
    const response = await fetch(MyProxy + 'token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        'email': email, 
        'password': password 
      })
    });

    const data = await response.json();

    if (response.status === 200) {
      // 成功時処理
      console.log('テスト成功', data);
      return data;
    } else {
      // 失敗時処理
      console.error('テスト失敗', data);
      return null;
    }
  } catch (error) {
    // ネットワークエラーやリクエスト失敗時の処理
    console.error('通信エラー:', error);
    throw error;
  }
}