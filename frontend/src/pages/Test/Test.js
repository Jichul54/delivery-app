import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { postTestMessage } from '../../api/test'; // 関数をインポート

const Test = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        // APIを呼び出す
        const result = await postTestMessage(message);
        if (result) {
            // 成功時のロジック
            console.log(result);
            alert(`成功メッセージ: ${result.message}`);
        } else {
            // 失敗時のロジック
            alert('テスト失敗');
        }
    };

    return (
        <div>
            <TextField
                label="メッセージ"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>
                送信
            </Button>
        </div>
    );
};

export default Test;
