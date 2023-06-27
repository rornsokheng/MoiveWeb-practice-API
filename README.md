<p align="center">
  <a href="https://www.youtube.com/@rornsokheng" target="_blank" rel="noopener noreferrer"><img src="/src//components//img/logo-text.svg" width="80" alt="The Rocket devs Logo" /></a>
</p>

<p align="center">A <a href="https://developer.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>API</p>
<p align="center">
<img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" width="80">
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" width="110">
<br/>
<img alt="YouTube Channel Subscribers" src="https://img.shields.io/youtube/channel/subscribers/UCJHZ__wUxS9lgTZHMxpMJcQ?style=social">
<br/>
<img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_560/https://adscom.biz/wp-content/uploads/2017/02/ABA-logo-no-padding.png" width="80" alt="ABA" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" width="55" alt="The rocket devs Logos" />
</p>

<h1>React js + Tailwind CSS + TMDB API
  <a
    href="https://react.dev/"
    target="blank"
  >
<br/>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoD9nduODgEX90baYrLHThjEP_OHVmijs7GNXDcBPZmEWmU6nqoiEkZk6t7XFdr5MDOew&usqp=CAU"
      width="50"
      alt="Nest Logo"
    />
<img
      src="https://camo.githubusercontent.com/53b9876cd8e38928387c6824043b0e2772b15b1bfdb7f42d0864216abbf3dfe8/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"
      width="200"
      alt="Nest Logo"
    />
<img
      src="https://files.readme.io/29c6fee-blue_short.svg"
      width="50"
      alt="Nest Logo"
    />
  </a>
</h1>

## Features

This is a React JS + Tailwind CSS boilerplate code with preconfigured libraries and packages with the following features:

- Preconfigured [VueTailwind](https://www.vue-tailwind.com/) with highly customizable tailwind module
- Integrated [nuxt/axios](https://axios.nuxtjs.org/) for promise based HTTP client
- Integrated [nuxt/auth](https://auth.nuxtjs.org/) for authentication
- Integrated [nuxt-img](https://image.nuxtjs.org/components/nuxt-img/) to replace vanilla `<img>` HTML tag for better image optimization
- Integrated [@nuxtjs/moment](https://www.npmjs.com/package/@nuxtjs/moment) for time formatting
- Smooth configurable page, layout transition at `@/assets/css/main`
- Built-in awesome content loader using [vue-content-loader](https://www.npmjs.com/package/vue-content-loader)
- Integrated [@babel/eslint-parser, prettier](https://www.npmjs.com/package/@babel/eslint-parser) for codes' rules & styles checking and formatting
- Integrated [vuex-map-fields](https://www.npmjs.com/package/vuex-map-fields) for form data binding

## Setup Guide

**Be aware that** you might have to add **BASE_URL** to your environment variable in case you build for production.

### API Installation

This boilerplate fetch data from [tfd-nest-boilerplate](https://github.com/tfd-ed/tfd-nest-boilerplate). Make sure you install the server and run it. Here is the easy step to install the server ( Make sure you have [docker](https://www.docker.com/get-started) installed) :

```bash
$ git clone https://github.com/tfd-ed/tfd-nest-boilerplate.git
cd tfd-nest-boilerplate
cp .env.example .env # or copy .env.example .env on Windows
docker-compose up -d
```

### Client Installation

```bash
$ git clone https://github.com/tfd-ed/tfd-nuxt-tailwind-boilerplate
$ cd tfd-nuxt-tailwind-boilerplate
$ yarn install
$ yarn dev
```

Visit http://localhost:3000/

### Production Guide

```bash
# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

### With Docker

Comming Soon!

## Donation

Kindly donate to the following bank account (Cambodia) if you want to support our works.

<img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_560/https://adscom.biz/wp-content/uploads/2017/02/ABA-logo-no-padding.png" width="120" alt="TFD Logo" />

#### KHEANG KIM ANG

#### 001 821 043

You can also donate with **Visa Direct**.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" width="120" alt="TFD Logo" />

#### 4026 4503 2163 1102
