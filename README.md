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
Langsung lihat aja di [.gitignore](/.gitignore)

## 3. Add VueJs to page
