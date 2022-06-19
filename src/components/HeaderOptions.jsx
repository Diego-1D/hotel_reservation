import { Box, Typography } from "@mui/material";

const HeaderOptions = ({ Icon, title }) => {

    return (
        <Box sx={{display:'flex',  gap: '5px'}}>
            <Icon />
            {title}
        </Box>
    )
}

export default HeaderOptions;