import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BrochureData, fetchCityProductGrid } from "@/services/api";
import { Typography, Divider,Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import Error from "@/components/Error";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Product({ brochures, city, product , error }: BrochureData & { error: string }) {
    if(error){
        return <Error message={error}/>;
    }

    return <>
        <Head>
            <title>Product-City Grid</title>
        </Head>
        <Box sx={{ flexGrow: 1 }}>
            <Box margin={{ md: 5 }} display="flex" flexDirection="row">
                <Box flex={1}>
                    <Typography variant="subtitle2" fontWeight="700">City: </Typography>
                    <Typography variant="body1">{city.description}</Typography>
                </Box>
                <Box flex={1}>
                    <Typography variant="subtitle2" fontWeight="700">Product: </Typography>
                    <Typography variant="body1">{product.description}</Typography>
                </Box>
            </Box>

            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 16}} padding={{ md: 12 }}>
                {brochures.map((brochure, index) =>
                    (<Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>
                            <Typography variant="subtitle1" color="black">{brochure.title}</Typography>
                            <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
                            <Button variant="contained" size="small" component={Link} href="/webapp/viewer">Open</Button>
                        </Item>
                    </Grid>))}
            </Grid>
        </Box>
    </>
}

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { status, data, error } = await fetchCityProductGrid(
        params.city,
        params.product
    );
    switch (status){
        case "not-found":
            return { notFound: true }
        case "error":
            return { props: { error: error.toString() } }
        default:
            return {
                props: {
                    ...data
                }
            };
    }


}

export default Product;
