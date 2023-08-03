## Bonial (Brochures Application)

![main-dashboard](https://github.com/Euler-KB/fullstack-brochure-app/assets/20619575/63892d11-0e57-48c6-8cf8-f7e2f23673dc)

#### Technologies Used
- NestJS (Typescript) - Web API
- Next.js + Material UI (Typescript) - Frontend
- Strapi CMS + Sqlite - CMS

#### WEB API
The web api contains the route that aggregates single response for the frontend via `/city-product-grid`. It is developed with NestJS.

<b>Components of services</b>:
- `city-product.controller`: Responsible for serving requests for endpoint: `/city-product-grid` by calling CMS api + internal brochure api and mapping response
- `cms.service`: Provides gateway to CMS api
- `brochures.service`: Returns mocked brochures data

#### WEB CMS
This is a `strapi` CMS service that exposes apis and management dashboard for creating and retrieving `products` and `cities`.
This  component provides comprehensive UI for stakeholders as well as exposing endpoints for web-api. For simplicity, Sqlite is used for data persistence.

#### WEB FRONTEND
A fully fledged next.js web application that renders an SSR HTML brochures page by visiting the route `/[city]/[product]`.
If the product or city is not found it will render the default 404 page.

### Running Application
1. Navigate to the root project directory
2. Run the command `npm start`
3. (Optional) Configure `Strapi` CMS by navigating to `localhost:1337` and configure `find` and `findOne` permissions for both collections `city` and `products`


![settings-roles](https://github.com/Euler-KB/fullstack-brochure-app/assets/20619575/7d7e14dc-3740-4bd9-8b84-02f0f3bf38b0)

![city-permission](https://github.com/Euler-KB/fullstack-brochure-app/assets/20619575/69af81a5-159c-496b-b88e-4ffee6c70d79)

![product-permission](https://github.com/Euler-KB/fullstack-brochure-app/assets/20619575/d0da650b-a186-4ebe-9d76-f2aa7f256c0a)

4. Navigate to frontend app on `localhost:8080`
