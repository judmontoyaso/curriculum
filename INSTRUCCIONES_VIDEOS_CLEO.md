# Cómo agregar videos de Instagram de Cleo Cuquis

## Paso 1: Obtener el ID del post de Instagram

1. Ve a Instagram y abre el post que quieres mostrar
2. Haz clic en los tres puntos (···) del post
3. Selecciona "Copiar enlace"
4. El enlace tendrá este formato: `https://www.instagram.com/p/ABC123xyz/`
5. La parte `ABC123xyz` es el ID del post

## Paso 2: Actualizar el código

En el archivo `pages/project.jsx`, busca la sección `cleoVideos` (alrededor de la línea 270) y actualiza las URLs:

```javascript
const cleoVideos = [
  {
    title: "Galletas nutritivas para perros",
    description: "Presentación de nuestras galletas artesanales con kéfir",
    url: "https://www.instagram.com/p/TU_POST_ID_AQUI/embed"
    //                                 ^^^^^^^^^^^^^^^^
    //                          Reemplaza con el ID real
  },
  // ... más videos
];
```

## Ejemplo con IDs reales:

```javascript
const cleoVideos = [
  {
    title: "Galletas nutritivas para perros",
    description: "Presentación de nuestras galletas artesanales con kéfir",
    url: "https://www.instagram.com/p/DCVxyz123/embed"
  },
  {
    title: "Proceso de elaboración",
    description: "Cómo preparamos las galletas con ingredientes naturales",
    url: "https://www.instagram.com/p/DBAxyz456/embed"
  },
  {
    title: "Beneficios del kéfir",
    description: "Por qué usamos kéfir en nuestras galletas",
    url: "https://www.instagram.com/p/DABxyz789/embed"
  }
];
```

## Alternativa: Usar Reels o Videos de Instagram

Si quieres mostrar Reels, usa el mismo formato:
```
https://www.instagram.com/reel/ABC123xyz/embed
```

## Nota importante:

- Asegúrate de que los posts sean **públicos** en Instagram
- Agrega `/embed` al final de la URL para que funcione en iframe
- Puedes agregar más videos al array simplemente duplicando el objeto

## Para agregar más videos:

```javascript
const cleoVideos = [
  // ... videos existentes
  {
    title: "Nuevo video",
    description: "Descripción del nuevo video",
    url: "https://www.instagram.com/p/NUEVO_ID/embed"
  }
];
```

---

**¿Necesitas ayuda?** Simplemente proporciona los enlaces de Instagram y yo actualizo el código por ti.
