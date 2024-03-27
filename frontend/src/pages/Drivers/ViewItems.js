import { Box } from "@mui/material";
import AppBarDriver from "../../components/AppBar_Driver";
import ItemList from "../../components/ItemList";

export default function ViewItems() {

  let item_list;
  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        {/* <ItemList item_list={ item_list } /> */}
      </Box>
    </div>
  )
}