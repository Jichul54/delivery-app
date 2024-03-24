import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"

export default function ItemList() {
  // APIで情報取得
  const item_list = [
    {
      order_id: 1,
      name: '佐藤',
      address: '福岡市博多区山王・・・・・・・・'
    },
    {
      order_id: 2,
      name: '田中',
      address: '福岡市中央区・・・・・・・・'
    },
    {
      order_id: 4,
      name: '山崎',
      address: '福岡市西区・・・・・・・・'
    }
  ]

  return (
    <div>
      <List>
        {item_list.map(({ name, address }, index) => (
          <ListItem key={'item' + index}>
            <ListItemAvatar sx={{ bgcolor:'white', color:'black' }}>{index+1}</ListItemAvatar>
            <ListItemText primary={name} secondary={address} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}