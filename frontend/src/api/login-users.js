export async function postUserLoginInfo(user_id, password) {
  try {
    const response = await fetch('/login-users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        "user_id": user_id, 
        "password": password 
      })
    });

    const data = await response.json();

    if (response.status === 201) {
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