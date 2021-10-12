using System;
using System.IO;
using Villians.Models;

namespace Villians.Services
{
    public class ImageService
    {
        private readonly ImageSettings _imageSettings;

        private readonly DirectoryInfo _directoryInfo;

        private readonly FileInfo _defaultImage;

        public ImageService(ImageSettings imageSettings)
        {
            _imageSettings = imageSettings ?? throw new ArgumentNullException(nameof(imageSettings));
            _directoryInfo = new DirectoryInfo(_imageSettings.Path);
            // TODO: store default image in application
            _defaultImage = new FileInfo(Path.Combine(_directoryInfo.FullName, "notfound.jfif"));
        }

        public (FileStream imageFileStream, string fileExtension) GetImage(string imageName)
        {
            var image = new FileInfo(Path.Combine(_directoryInfo.FullName, imageName));
            if (!File.Exists(imageName)) image = _defaultImage;
            return (File.OpenRead(image.FullName), image.Extension[1..]);
        }
    }
}
