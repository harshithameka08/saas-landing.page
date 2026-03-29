const Jimp = require('jimp');

async function cropIcons() {
  try {
    const image = await Jimp.read('./public/icons.png');
    // We assume the icons are roughly spaced. Let's start with a generous 64x64 box.
    // Row 1
    image.clone().crop(60, 160, 64, 64).write('./public/icon1.png');
    image.clone().crop(390, 160, 64, 64).write('./public/icon2.png');
    image.clone().crop(720, 160, 64, 64).write('./public/icon3.png');
    
    // Row 2
    image.clone().crop(60, 350, 64, 64).write('./public/icon4.png');
    image.clone().crop(390, 350, 64, 64).write('./public/icon5.png');
    image.clone().crop(720, 350, 64, 64).write('./public/icon6.png');

    console.log('Icons cropped successfully. View them to adjust boundaries.');
  } catch (err) {
    console.error('Error:', err);
  }
}

cropIcons();
