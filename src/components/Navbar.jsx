import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Box, Container, Toolbar, Typography } from '@mui/material';


const Navbar = () => {

    return (
        <Box sx={{ bgcolor: '#1976d2' }}>
            <Container>
                <Toolbar >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            flexGrow: 1,
                            fontWeight: "bold",
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Booking.com
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ color: 'white', display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    )
}

export default Navbar