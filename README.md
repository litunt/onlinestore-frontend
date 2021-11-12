# onlinestore-frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Technology stack
1. TypeScript
2. Angular CLI
3. RxJS
4. [NG-ZORRO](https://ng.ant.design/components/overview/en)

## How to start
Being in project root folder (*onlinestore-frontend*):
1. `npm install`
2. `ng serve`
3. navigate to `http://localhost:4200/`

Project is already set up to send request to backend running on AWS server

## Flow
- Since there are not too many products in DB, you can check pagination and sorting from toys -> all
- Registration part is probably not done in a very user-friendly way, so after registration you are just being redirected back to login page and can enter your new credentials
- **NB!** there is some weird problem that I didn't have time to solve - if one user is already logged on or have been logged in recently, and you want to change user/register new user, then please open `http://localhost:4200/` again in new tab
- **NB!** almost the same problem exists immediately after user is logged in. After login you may receive error trying to retrieve some data (e.g. going to shopping cart or profile), so please just refresh the page and everything works fine

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

- components generated with `ng g c component-name`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

