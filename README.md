# Integrasi Vue dan .Net Core

## Persiapan

Sebelum memulai project, ada beberapa tools yang harus diinstall terlebih dahulu, yaitu
* [Dotnet Core v3](https://dotnet.microsoft.com/download/dotnet-core/3.0)
* NodeJS [v10](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi) __atau__ [v12](https://nodejs.org/dist/v12.11.1/node-v12.11.1-x64.msi)
* [Vue Cli](https://cli.vuejs.org/guide/installation.html) *Cara untuk install di Windows harusnya sama aja*
* [Git](https://git-scm.com/) *Opsional*

Setelah menginstall aplikasi tadi, bisa memulai project dotnet.

## 1. Create project
Cara buat project dotnet seperti biasa pakai `dotnet new`. Ini perintah yg dipake di project ini :

```
mkdir dotnet-example
cd dotnet-example
dotnet new mvc
```

## 2. Add VueJs to Project
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

Perintah `vue create` yg tadi dijalankan akan secara otomatis juga menjalankan `git init`, jadi sampai step ini git sudah terpasang dan bisa mulai commit.

## 3. Penjelasan `package.json` dan `vue.config.js`

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

Selanjutnya adalah file [vue.config.js](/vue.config.js). Ini harus __dibuat secara manual__ di root folder project nya. Isi dari file ini adalah :

```js
module.exports = {
    outputDir: 'wwwroot/vue',
    runtimeCompiler: true,
    filenameHashing: false,
    crossorigin: "anonymous",
    devServer: {
        https: true
    }
}
```

Fungsi dari file ini adalah mengarahkan hasil build vuejs kedalam folder `wwwroot/vue`. Project dotnet yg berbasis mvc biasanya akan menyimpan file asset seperti js dan css di dalam folder `wwwroot`. jadi supaya VueJs dapat di masukkan kedalam html, maka hasil compile VueJs akan ditempatkan di folder `wwwroot/vue`.

Setelah menambahkan file [vue.config.js](/vue.config.js) dan menjalankan perintah `npm run build`, harusnya folder `wwwroot/vue` akan terbentuk dengan sendirinya.

## 4. Add VueJs to ASP Views

Jalankan perintah `npm run serve` untuk memulai VueJs. berikut penampakan dari perintah tersebut :
![Run](/docs/5.png)
Akan terlihat ada 2 alamat, `Local` dan `Network` salin halaman network tersebut. Lalu buka [Views/Shared/_Layout.cshtml](/Views/Shared/_Layout.cshtml). Akan terlihat seperti berikut

```cshtml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@ViewData["Title"] - ASPCoba</title>
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="~/css/site.css" />

</head>
<body>
    <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container">
                <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">ASPCoba</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container">
        <main role="main" class="pb-3">
            @RenderBody()
        </main>
    </div>

    <footer class="border-top footer text-muted">
        <div class="container">
            &copy; 2019 - ASPCoba - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </div>
    </footer>
    <script src="~/lib/jquery/dist/jquery.min.js"></script>
    <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="~/js/site.js" asp-append-version="true"></script>
    @RenderSection("Scripts", required: false)
</body>
</html>
```
Lalu pastekan sebelum memasuki @RenderSection
```cshtml
<environment exclude="Development">
    <script src="~/vue/js/chunk-vendors.js"></script>
    <script src="~/vue/js/app.js"></script>
</environment>

<environment include="Development">
    <script src="https://10.107.206.178:8080/app.js"></script>
</environment>
```
dan pastekan kode berikut setelah tag link site.css
```cshtml
<environment exclude="Development">
    <link rel="stylesheet" href="~/vue/css/app.css" />
</environment>
```
Sehingga file _Layout.cshtml tersebut terlihat seperti berikut
```cshtml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@ViewData["Title"] - ASPCoba</title>
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="~/css/site.css" />

    <environment exclude="Development">
        <link rel="stylesheet" href="~/vue/css/app.css" />
    </environment>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container">
                <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">ASPCoba</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container">
        <main role="main" class="pb-3">
            @RenderBody()
        </main>
    </div>

    <footer class="border-top footer text-muted">
        <div class="container">
            &copy; 2019 - ASPCoba - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </div>
    </footer>
    <script src="~/lib/jquery/dist/jquery.min.js"></script>
    <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

    <environment exclude="Development">
        <script src="~/vue/js/chunk-vendors.js"></script>
        <script src="~/vue/js/app.js"></script>
    </environment>
    
    <environment include="Development">
        <script src="https://10.107.206.178:8080/app.js"></script>
    </environment>
    
    <script src="~/js/site.js" asp-append-version="true"></script>
    @RenderSection("Scripts", required: false)
</body>
</html>
```
Kemudian buka file [Views/Home/Index.cshtml](/Views/Home/Index.cshtml) dan pastekan `<div id="app"></div>` pada bagian pada paling bawah file. Sehingga terlihat seperti berikut :
```cshtml
@{
    ViewData["Title"] = "Home Page";
}

<div class="text-center">
    <h1 class="display-4">Welcome</h1>
    <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
</div>
<div id="app">
    <app></app>
</div>
```

## 5. Test running
Pastikan perintah `npm run serve` berjalan dan untuk memulai project dotnet tinggal tekan F5 di Visual Studio Code. Setelah menekan tombol tersebut, browser akan terbuka dan hasilnya seperti ini
![Final](/docs/6.png)
Jika hasilnya tidak seperti itu, berarti ada langkah yg lupa atau contoh ini yg salah. Oke gitu aja contoh penggabungan .NET Core dan VueJs. Klo males bikin dari awal, tinggal download aja dari sini, :laughing: :laughing: :laughing:
