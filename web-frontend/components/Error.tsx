import Box from "@mui/material/Box";
import {Divider, Typography} from "@mui/material";

export default function Error({ message }: { message: string }){
    return <Box flexGrow={1} textAlign="center" p={5}>
        <Typography variant="caption">Oops, something went wrong</Typography>
        <Divider style={{ marginTop: 10 , marginBottom: 10 }}/>
        <Typography variant="subtitle1"  color="red">{message}</Typography>
    </Box>
}
