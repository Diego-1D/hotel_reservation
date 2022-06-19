import {
    Box,
    Button,
    Container,
    Input,
    List,
    ListItemButton,
    Typography
} from '@mui/material'

const Mail = () => {
    return (
        <Box sx={{ bgcolor: 'blue' }}>
            <Container sx={{ pt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Typography variant='h5'>Economize tempo, economize dinheiro!</Typography>
                <Typography variant='subtitle1'>Inscreva-se e enviaremos as melhores ofertas para você</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: '5px', my: '20px' }}>
                    <Input
                      disableUnderline={true}
                        type='text'
                        sx={{ width: '300px', height: '40px', px: '10px', bgcolor: 'white', border: '1px solid tranparent', borderRadius: '5px' }}
                        placeholder='Seu e-mail'
                    />
                    <Button sx={{ color: 'white', bgcolor: '#1976d2', height: '40px', width: '150px', mt: { xs: '5px', md: '0' } }} >
                        Increva-se
                    </Button>
                </Box>
            </Container>
            <Box>
                <Container>
                    <List sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, textDecoration: 'underline', color: 'white', fontWeight: 'bold' }}>
                        <ListItemButton>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Versão para celular</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Sua conta</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Serviço de Apoio ao Cliente</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Torne-se um afiliado</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Booking.com para Empresas</Typography>
                        </ListItemButton>
                    </List>
                </Container>
            </Box>
        </Box>
    )
}

export default Mail