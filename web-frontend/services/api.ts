const BASE_URL = process.env.BASE_API_URL;

export interface Product {
    id: number;
    name: string;
    description: string;
    urlRepresentation: string;
    enabled: boolean
}

export interface City {
    id: number;
    name: string;
    description: string;
    urlRepresentation: string;
    enabled: boolean
}

export interface BrochureData {
    brochures: any[],
    product: Product,
    city: City
}

interface GridDataResponse {
    status: string;
    data?: BrochureData;
    error: any
}

export async function fetchCityProductGrid(city: string, product: string): Promise<GridDataResponse> {

    const query= new URLSearchParams({
        product,
        city
    });

    try {
        const response = await fetch(`${BASE_URL}/city-product-grid?${query}`, {
            method: "GET"
        });

        return await response.json() as GridDataResponse;
    }
    catch (error: any){
        return { status: "error", error: `Failed fetching /city-product-grid data - ${error}\n${error.stack}` };
    }
}
