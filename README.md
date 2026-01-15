# Angular 21 Installation and Setup Guide

## Prerequisites
- Node.js
- npm

## Installation

### 1. Install Angular CLI
```bash
npm install -g @angular/cli
```

### 2. Create a New Angular Project
```bash
ng new my-angular-app
cd my-angular-app
```

### 3. Start the Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/` in your browser.

## Project Structure
```
my-angular-app/
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── .editorconfig
├── .gitignore
│
├── public/
│   └── favicon.ico
│
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    ├── app/
    │   ├── app.ts
    │   ├── app.html
    │   ├── app.css
    │   ├── app.config.ts
    │   └── app.routes.ts
```

## Basic Setup

### Generate Components
```bash
ng generate component component-name
ng generate service service-name
```

### Build for Production
```bash
ng build --prod
```

## Useful Commands
- `ng serve` - Start development server
- `ng build` - Build the project
- `ng test` - Run tests
- `ng lint` - Check code quality

## Learn More
Visit [Angular Official Documentation](https://angular.dev/overview)