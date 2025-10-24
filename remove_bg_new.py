"""
Script para remover el fondo de las nuevas imágenes de avatar
"""

from rembg import remove
from PIL import Image
import os

# Carpeta donde están las imágenes
avatar_folder = "public/avatar"

# Solo las nuevas imágenes
images = ["chef.png", "programador.png", "tesoros.png"]

print("🎨 Procesando nuevas imágenes...\n")

for image_name in images:
    input_path = os.path.join(avatar_folder, image_name)
    backup_path = os.path.join(avatar_folder, f"{image_name.split('.')[0]}_backup.png")
    output_path = os.path.join(avatar_folder, f"{image_name.split('.')[0]}_nobg.png")
    
    try:
        print(f"📸 Procesando: {image_name}")
        
        # Hacer backup
        if os.path.exists(input_path):
            img_original = Image.open(input_path)
            img_original.save(backup_path)
            print(f"   ✅ Backup guardado")
        
        # Remover el fondo
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        output_data = remove(input_data)
        
        # Guardar sin fondo
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)
        
        print(f"   ✨ Fondo removido")
        
    except Exception as e:
        print(f"   ❌ Error: {str(e)}")
    
    print()

print("🎉 ¡Listo! Ahora reemplazando archivos...")

# Reemplazar automáticamente
for image_name in images:
    nobg_path = os.path.join(avatar_folder, f"{image_name.split('.')[0]}_nobg.png")
    final_path = os.path.join(avatar_folder, image_name)
    
    if os.path.exists(nobg_path):
        os.replace(nobg_path, final_path)
        print(f"✅ {image_name} actualizada")

print("\n🌟 Proceso completado. Backups guardados como *_backup.png")
