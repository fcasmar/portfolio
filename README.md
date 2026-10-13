# Portfolio de Francisco Castillo Martín

Web personal en español con experiencia, formación, habilidades y ejemplos de trabajos: [Evolution by Corina](https://evolutionbycorina.com) y [Horno de Luisa](https://hornodeluisa.es).

Es una web estática en HTML, CSS y JavaScript, publicada con GitHub Pages. No necesita Node, dependencias, compilación ni un workflow propio.

## Publicación

- Web: [https://cv.fcasmar.com](https://cv.fcasmar.com).
- Repositorio: [fcasmar/portfolio](https://github.com/fcasmar/portfolio).
- Fuente de GitHub Pages: **Deploy from a branch**, rama **main**, carpeta **/(root)**.
- Dominio personalizado de GitHub Pages y contenido del archivo `CNAME`: `cv.fcasmar.com`.

La web se publica en el subdominio `cv`; la raíz `fcasmar.com` conserva su configuración independiente.

## Archivos

- `index.html`: contenido, enlaces y metadatos de la página.
- `styles.css`: diseño y adaptación a móvil, tablet y ordenador.
- `script.js`: interacciones de la interfaz.
- `assets/images/`: foto de perfil e imágenes de los proyectos.
- `assets/documents/CV-Francisco-Castillo-Martin.pdf`: CV descargable.
- `.nojekyll`: archivo vacío que indica a GitHub Pages que publique los archivos sin procesarlos con Jekyll.
- `CNAME`: dominio personalizado `cv.fcasmar.com`.

## Vista previa local

Abre una terminal dentro de la carpeta que contiene `index.html` y ejecuta:

```sh
python3 -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000) en el navegador. Para detener el servidor, pulsa `Ctrl+C` en esa terminal. Python solo se usa para esta vista previa local; la web publicada no depende de él.

## Actualizar el contenido

- Edita los textos de `index.html` para cambiar la presentación, experiencia, formación, habilidades o servicios.
- Actualiza los enlaces de contacto y proyectos en sus atributos `href`.
- Para cambiar el CV, reemplaza `assets/documents/CV-Francisco-Castillo-Martin.pdf` conservando su nombre, o cambia también el enlace del botón de descarga en `index.html`.
- Para cambiar las imágenes, reemplaza los archivos de `assets/images/` o actualiza sus rutas y textos alternativos en `index.html`.
- Guarda los cambios en `main`: GitHub Pages volverá a publicar la web automáticamente.

Puedes editar los archivos desde GitHub o desde una copia local del repositorio y subir los cambios a `main`. Mantén `index.html`, `.nojekyll` y `CNAME` en la raíz. Tras cada actualización, comprueba el despliegue en **Actions** y abre la web para revisar el resultado.

## Mantener el dominio

En Cloudflare, la zona `fcasmar.com` debe conservar este registro:

| Tipo | Nombre | Destino | Estado del proxy |
|---|---|---|---|
| CNAME | `cv` | `fcasmar.github.io` | **DNS only** (nube gris) |

El destino no lleva `https://` ni `/portfolio/`. No cambies este registro, el archivo `CNAME` ni el dominio de **Settings → Pages** salvo que vayas a migrar la web. Conserva los registros de la raíz, correo y otros servicios.

En **Settings → Pages**, mantén **Enforce HTTPS** activado cuando esté disponible. Si se cambia el dominio durante una migración, GitHub deberá verificar el DNS y emitir un certificado; esta opción puede tardar hasta 24 horas en habilitarse.

## Documentación oficial

- [Crear un sitio de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site): archivos estáticos, página de entrada y `.nojekyll`.
- [Configurar la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): publicación desde una rama y carpeta raíz.
- [Gestionar el dominio personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site): registro CNAME y dominio en GitHub Pages.
- [HTTPS en GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https): certificado y redirección a HTTPS.
- [Estados del proxy en Cloudflare](https://developers.cloudflare.com/dns/proxy-status/): diferencia entre DNS only y Proxied.
