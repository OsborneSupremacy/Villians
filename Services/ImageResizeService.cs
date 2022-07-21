using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;

namespace Villians.Services;

public class ImageResizeService
{
    /// <summary>
    /// Make image square, if it's not already square. Original image will be overwritten
    /// </summary>
    /// <param name="imagePath"></param>
    public void MakeImageSquare(string imagePath)
    {
        using var image = Image.Load(imagePath);

        if (image.Width != image.Height)
        {
            var longerEdge = image.Width > image.Height ? image.Width : image.Height;
            image.Mutate(x =>
                x.Resize(new ResizeOptions()
                {
                    Mode = ResizeMode.BoxPad,
                    Size = new Size(longerEdge, longerEdge)
                }));
            image.Save(imagePath);
        }
    }
}
