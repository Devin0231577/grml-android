grml-android
============

grml-android is a lightweight version of [grml-live](https://github.com/grml/grml-live) built with `apktool`, `android-sdk`, `img2simg`, [sdat2img](https://github.com/xpirt/sdat2img), [img2sdat](https://github.com/xpirt/img2sdat), and instructions.

The included tools allow on-the-fly development to extract the contents of system.dat from Android OS, edit the contents, then repackage them for installation. Run `grml-network` for internet access. Tools and information are located in `/root/`

## Unpacking

Use the `unzip` command to extract your Android OS files, including `system.transfer.list` and `system.new.dat` then issue the following command:

    # ./sdat2img.py system.transfer.list system.new.dat [OUTPUT FILE].img

Next mount the image file you created to /mnt by issuing the following command:

    # mount [OUTPUT FILE].img /mnt && cd /mnt

## Apktool

To examine an apk, use `apktool d [appname].apk` and to repack an apk, use `apktool b [appname] -o [new_appname].apk`. To run a rebuilt application, you must re-sign the application. See [Android](https://developer.android.com/studio/publish/app-signing.html#signing-manually) [Documentation](https://source.android.com/devices/tech/ota/sign_builds) for details.

## Repacking

Use the `umount /mnt` command to unmount your image, then issue the following commands to 
convert your image back into a dat file. Use the `zip` command to compress your files.

```
# img2simg [OUTPUT FILE].img [SPARSE IMG].img
# ./img2sdat.py [SPARSE IMG].img
# zip [ZIP FILE NAME].zip boot.img firmware-update, system.img, etc ...
```
