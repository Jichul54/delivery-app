import { MyProxy } from "./proxy";

export async function updateDeliveryStatus(delivery_id, delivery_status) {
  try {
    const response = await fetch(MyProxy + 'delivery/' + delivery_id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ delivery_status: delivery_status }),
    });

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