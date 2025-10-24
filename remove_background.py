"""
Script para remover el fondo de las imágenes de avatar
Usa la librería rembg que utiliza IA para detectar y remover fondos
"""

from rembg import remove
from PIL import Image
import os

# Carpeta donde están las imágenes
avatar_folder = "public/avatar"

# Lista de imágenes a procesar
images = ["original.png", "pirata.png", "astronauta.png"]

print("🎨 Iniciando proceso de remoción de fondo...\n")

for image_name in images:
    input_path = os.path.join(avatar_folder, image_name)
    
    # Crear nombre para el backup
    backup_path = os.path.join(avatar_folder, f"{image_name.split('.')[0]}_backup.png")
    
    # Crear nombre temporal
    output_path = os.path.join(avatar_folder, f"{image_name.split('.')[0]}_nobg.png")
    
    try:
        print(f"📸 Procesando: {image_name}")
        
        # Hacer backup de la imagen original
        if os.path.exists(input_path):
            img_original = Image.open(input_path)
            img_original.save(backup_path)
            print(f"   ✅ Backup guardado: {backup_path}")
        
        # Abrir la imagen
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # Remover el fondo
        output_data = remove(input_data)
        
        # Guardar la imagen sin fondo
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)
        
        print(f"   ✨ Imagen sin fondo guardada: {output_path}")
        
        # Opcional: Reemplazar la original
        # os.replace(output_path, input_path)
        # print(f"   🔄 Original reemplazada")
        
    except Exception as e:
        print(f"   ❌ Error procesando {image_name}: {str(e)}")
    
    print()

print("=" * 60)
print("🎉 ¡Proceso completado!")
print("\n📁 Archivos generados:")
print("   - *_backup.png  → Tus imágenes originales (respaldo)")
print("   - *_nobg.png    → Imágenes sin fondo")
print("\n💡 Próximos pasos:")
print("   1. Revisa las imágenes *_nobg.png")
print("   2. Si te gustan, reemplaza las originales:")
print("      - Borra: original.png, pirata.png, astronauta.png")
print("      - Renombra: *_nobg.png → *.png")
print("   3. Si no te gustan, tienes los backups")
print("=" * 60)
