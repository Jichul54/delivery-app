// import { useState } from "react";
import { TextField, Button, Card, CardHeader, CardContent, Container } from '@mui/material';

export const LoginForm = () => {

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // let username;
  // let password;

  return (
    <div className="Login">
      <Container maxWidth="xs">
          <Card variant="outlined" sx={{ p:2 }}>
            <CardHeader title="ログイン"/>
            <CardContent>
              <div>
                <TextField
                  id="username"
                  label="ID"
                  variant="outlined"
                  size="medium"
                  required
                />
              </div>
              <div>
                <TextField
                  id="password"
                  label="パスワード"
                  variant="outlined"
                  size="medium"
                  required
                />
              </div>
            </CardContent>
              <Button
                size="large"
                color="primary"
                variant="contained"
              >
                ログイン
              </Button>
          </Card>
        </Container>
    </div>
  );
}

export default LoginForm;