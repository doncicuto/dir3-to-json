# DIR3-to-JSON

## Versión en español

De acuerdo con el Esquema Nacional de Interoperabilidad

> las administraciones públicas mantendrán una relación actualizada de sus órganos administrativos y oficinas de registro y atención al ciudadano, y sus relaciones entre ellos. Dichos órganos y oficinas se codificarán de forma unívoca y esta codificación se difundirá entre las Administraciones públicas

El Directorio Común proporciona un Inventario unificado y común a toda la Administración de las unidades orgánicas / organismos públicos, sus oficinas asociadas y unidades de gestión económica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la información.

Todas las unidades orgánicas y sus organismos públicos disponen, por tanto, de un código que les identifica de forma unívoca denominado código DIR3.

Los ficheros que contienen los códigos DIR3, así como otra información, de las distintas administraciones públicas españolas están disponibles públicamente en el Área de Descargas del Centro de Transferencia de Tecnología del Portal de Administración Electrónica (CTT). La url del área de descargas es [https://administracionelectronica.gob.es/ctt/dir3/descargas](https://administracionelectronica.gob.es/ctt/dir3/descargas)

Los ficheros que pueden descargarse son hojas de cálculo en el formato XLSX. Para poder manipular esta información en entornos de programación puede resultar más adecuado disponer de ficheros en formato JSON.

Este repositorio contiene el código Javascript para descargar automáticamente del CTT los ficheros XLSX, y convertirlos en ficheros JSON usando NodeJS. El código emplea Typescript.

Para utilizarlo puedes seguir estos pasos:

- Clona este repositorio

- Instala las dependencias con npm o yarn:

```(bash)
yarn
```

- Ejecuta el script start con npm o yarn:

```(bash)
yarn start

```

En el directorio dist, encontrarás el directorio output donde encontrarás los ficheros convertidos a formato JSON.

Opciones:

- En el fichero tsconfig.json, puedes modificar la opción "outDir": "./dist", para cambiar la ubicación donde se crearán los directorios donde se descargarán los ficheros del CTT y se generarán los ficheros JSON y especialmente donde se generará el código que transpila el código Typescript en código Javascript. Si modificas este directorio deberás también cambiar el fichero package.json para que el script start refleje la ubicación del fichero app.js que contiene la función principal.
- En el directorio src/config tienes el fichero dir3.ts. En ese fichero está un array con todos los ficheros que van a descargarse desde el CTT. Puedes añadir o eliminar las URL de descarga, o modificar el nombre del fichero de salida.
- En el fichero app.ts tienes la definición de los nombres de los directorios donde se descargarán los ficheros descargados del ctt (input) o donde van a generarse los ficheros JSON (output).

## English version

According to the Spanish Interoperability Scheme

> public administrations will maintain an updated list of their administrative bodies and registration and citizen service offices, and their relationships between them. Said bodies and offices will be uniquely codified and this codification will be disseminated among public administrations

The Common Directory provides a unified and common Inventory to the entire Administration of the organic units / public bodies, their associated offices and economic and budgetary management units, facilitating the distributed and jointly responsible maintenance of the information.

All organic units and their public bodies therefore have a code that uniquely identifies them called the DIR3 code.

The files containing the DIR3 codes, as well as other information, of the different Spanish public administrations are publicly available in the Download Area of ​​the Technology Transfer Center of the Electronic Administration Portal (CTT). The url of the download area is [https://administracionelectronica.gob.es/ctt/dir3/descargas-lex.europa.eu](https://administracionelectronica.gob.es/ctt/dir3/descargas)

The files that can be downloaded are spreadsheets in XLSX format. In order to manipulate this information in programming environments, it may be more appropriate to have files in JSON format.

This repository contains the Javascript code to automatically download XLSX files from the CTT, and convert them into JSON files using NodeJS. The code uses Typescript.

To use it you can follow these steps:

- Clone this respository

- Install dependencies with npm or yarn:

```bash
yarn
```

- Execute the start script with npm or yarn:

```bash
yarn start

```

In the dist directory, you will find the output directory where you will find the files converted to JSON format.

Options:

- In the tsconfig.json file, you can modify the option "outDir": "./dist", to change the location where the directories will be created where the CTT files will be downloaded and the JSON files will be generated and especially where the code that transpiles Typescript code into Javascript code. If you modify this directory you must also change the package.json file so that the start script reflects the location of the app.js file that contains the main function.
- In the src / config directory you have the dir3.ts file. In this file there is an array with all the files that are going to be downloaded from the CTT. You can add or remove the download URLs, or modify the name of the output file.
- In the app.ts file you have the definition of the names of the directories where the files downloaded from ctt (input) will be downloaded or where the JSON files (output) will be generated.
