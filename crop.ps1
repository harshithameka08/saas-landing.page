$code = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class Cropper {
    public static void Crop() {
        string imgPath = @"D:\saas-landing.page\public\icons.png";
        using (Bitmap source = new Bitmap(imgPath)) {
            // Rough coordinates for 6 icons based on 1002x509 image
            Rectangle[] rects = new Rectangle[] {
                new Rectangle(60, 150, 64, 64),
                new Rectangle(390, 150, 64, 64),
                new Rectangle(720, 150, 64, 64),
                new Rectangle(60, 340, 64, 64),
                new Rectangle(390, 340, 64, 64),
                new Rectangle(720, 340, 64, 64)
            };
            
            for (int i = 0; i < rects.Length; i++) {
                using (Bitmap target = new Bitmap(rects[i].Width, rects[i].Height)) {
                    using (Graphics g = Graphics.FromImage(target)) {
                        g.DrawImage(source, new Rectangle(0, 0, target.Width, target.Height), 
                                    rects[i], GraphicsUnit.Pixel);
                    }
                    target.Save($@"D:\saas-landing.page\public\icon{i+1}.png", ImageFormat.Png);
                }
            }
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[Cropper]::Crop()
Write-Output "Cropped successfully."
