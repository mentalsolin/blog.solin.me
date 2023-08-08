---
title: "Fundamentals of CIT in Minecraft: Textures, Sounds"
date: 2022-10-09
tags:
    - minecraft
preview: 'How to apply custom textures and sounds to items through Custom Item Textures (CIT).'
---

## Note

If you want to change textures and sounds for items using an anvil, you will need the CIT Resewn or OptiFine mod. They are not required for static item changes.

## Creating a Template

Create a folder with the name of your resource pack in the resourcepacks directory.

Create a file named pack.mcmeta.

Write the following in it:

```
{
    "pack": {
        "pack_format": {format},
        "description": "{description}"
    }
}
```
Replace the values in curly braces. {format} -> 9

{Format} - This represents the version, which can be 1, 2, 3, 4, etc. Learn More

{Description} - This is the description of your resource pack that will be displayed in the selection menu. P.S. For colors, use the section sign § and color codes. Learn More

Then add an icon to your resource pack and rename it to pack.png (maximum icon size is 256x256).

If you want to statically change an item's texture, the file structure should look like this:

assets
minecraft
pack.mcmeta
pack.png
If you want to change the texture through renaming, then the structure should look like this:

assets
minecraft
optifine
cit
{pack-name}
pack.mcmeta
pack.png
Changing Item Texture through Renaming
Choose any item and create a file with its name, for example, stick.properties.

Write the following in it:

```
type=item
matchItems={item}
texture={texture}
nbt.display.Name=ipattern:{English Name}
```

{item} - The exact name of the item in English. For example, {item} -> stick

{texture} - The name of the texture to be placed in the folder alongside stick.properties.

{English Name} - Here, you can write any name to which your item will be renamed. For Cyrillic characters, use a unicode converter

```
Example: название -> \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435
```

Changing Static Item Texture
Go to the minecraft folder that we created earlier, and create a textures folder inside it, and within that, create an item folder.

Move the required texture to the item folder and name it after the item.

stick -> stick.png

Finding the Original Sound
Navigate to the root .minecraft directory, then go to assets -> indexes -> select your version.
Open a file, for example, 1.19.json, and copy its contents.

Find a JSON Beautifier

Paste the contents there, then download the resulting file and search for the desired sound. Learn More

Changing Item Sound
Go to the minecraft folder and create a sounds folder inside it, and within that, create an item folder.

In the item folder, create a folder for the sound you found during the search for the original sound.

Find any desired sound and convert it to the .ogg format using an OGG Converter

Then place it in our folder.
