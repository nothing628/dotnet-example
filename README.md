# Integrasi Vue dan .Net Core

## 1. Create project
Cara buat project dotnet seperti biasa pakai `dotnet new`. Ini perintah yg dipake di project ini :

```
dotnet new mvc
```

## 2. Add VueJs to Project
Sebelum menambahkan vuejs kedalam project, ada yg harus di-install terlebih dahulu!

* NodeJS [v10](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi) __atau__ [v12](https://nodejs.org/dist/v12.11.1/node-v12.11.1-x64.msi)
* [Vue Cli](https://cli.vuejs.org/guide/installation.html) *Cara untuk install di Windows harusnya sama aja*

Setelah menginstall aplikasi tadi, bisa di mulai menggabungkan VueJs kedalam project.
Jalankan installer NodeJS terlebih dahulu baru kemudian,
Jalankan perintah pada __Terminal__ atau __CMD__ di lokasi yg sama ketika menjalankan perintah `dotnet new mvc`
```
npm install -g @vue/cli
vue create .
```
Setelah menjalankan perintah `vue create .` akan ditanya beberapa pertanyaan (yg pertama cukup di Y-in aja, sisanya di enter-in aja)
![Step 1](/docs/1.png "First question")
![Step 2](/docs/2.png "First question")
![Step 3](/docs/3.png "First question")
![Step 4](/docs/4.png "First question")

Setelah itu akan perlu beberapa perbaikan terhadap file `.gitignore` __(Penting!)__.
Langsung lihat aja di [sini](/.gitignore)

Alasannya, `vue create` yg tadi dijalankan akan membuat folder git, jadi sampai step ini git sudah terpasang dan bisa mulai commit. _(jangan pernah jalankan perintah `git init`. step ini bakal pasang otomatis)_

## 3. Add VueJs to page

Sebelum menyatukan VueJs ke dalam halaman html, akan ada file bernama [package.json](/package.json) yg isinya seperti dibawah ini.
```json
{
  "name": "dotnet-example",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^2.6.5",
    "vue": "^2.6.10",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.11.0",
    "@vue/cli-plugin-eslint": "^3.11.0",
    "@vue/cli-service": "^3.11.0",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.2",
    "vue-template-compiler": "^2.6.10"
  }
}
```
Pada bagian `scripts` akan terdapat 3 key, yaitu `serve`, `build`, `lint`. Tapi yg akan sering dipake cuma `serve` dan `build`.
Untuk menjalankan dapat menggunakan perintah `npm run <perintah>`

* `npm run serve` dijalankan pada tahap development
* `npm run build` dijalankan ketika ingin release ke server

