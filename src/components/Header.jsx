import {
    Box, Button,
    Container,
    Typography,
    Toolbar
} from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';

const pages = ['Hospedagens', 'Voos', 'Aluguel de carros', 'Atrações', 'Táxis (aeroporto)'];

const Header = () => {
    return (
        <Box sx={{ bgcolor: '#1976d2' }}>
            <Container>
                <Toolbar>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ mr: 2, color: 'white', border: '1px solid white', }}
                            >
                                <HotelIcon sx={{ mr: 1 }} />
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: '2rem', gap: '2rem', color: 'white', }}>
                    <Typography variant='h4'>Uma vida inteira de descontos? Genial.</Typography>
                    <Typography variant='h6'>Seja recompensado por suas viagens –
                        desbloqueie economias instantâneas de 10% ou
                        mais com uma conta gratuita do Lamabooking
                    </Typography>
                    <Button sx={{ color: 'blue', bgcolor: 'white', height: '50px', width: '200px' }} >
                        Entrar / Cadastrar
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Header