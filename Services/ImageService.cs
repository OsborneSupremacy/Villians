using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Villians.Models;

namespace Villians.Services
{
    public class ImageService
    {
        private readonly ImageResizeService _imageResizeService;

        private readonly ImageSettings _imageSettings;

        private readonly DirectoryInfo _directoryInfo;

        private readonly FileInfo _defaultImage;

        private readonly HashSet<string> _fileExtensions = new HashSet<string>(StringComparer.OrdinalIgnoreCase) {
            ".apng",
            ".avif",
            ".gif",
            ".jfif",
            ".jpeg",
            ".jpg",
            ".png",
            ".svg",
            ".webp",
            ".bmp",
            ".tiff"
        };

        public ImageService(
        ImageResizeService imageResizeService,
        ImageSettings imageSettings
        )
        {
            _imageResizeService = imageResizeService ?? throw new ArgumentNullException(nameof(imageResizeService));
            _imageSettings = imageSettings ?? throw new ArgumentNullException(nameof(imageSettings));
            _directoryInfo = new DirectoryInfo(_imageSettings.Path);
            // TODO: store default image in application
            _defaultImage = new FileInfo(Path.Combine(_directoryInfo.FullName, "notfound.jfif"));
        }

        public (FileStream imageFileStream, string fileExtension) GetImage(string imageName)
        {
            var image = new FileInfo(Path.Combine(_directoryInfo.FullName, imageName));
            if (!image.Exists)
                image = _defaultImage;
            return (File.OpenRead(image.FullName), image.Extension[1..]);
        }

        public async Task<ImageUploadResult> UploadImageAsync(IFormFile image)
        {
            var ext = Path.GetExtension(image.FileName);

            if (!_fileExtensions.Contains(ext))
                return new ImageUploadResult(false, "Unsupported file type", string.Empty);

            var newFileName = Guid.NewGuid() + ext;
            var newFileFullName = Path.Combine(_directoryInfo.FullName, newFileName);

            await using var stream = new FileStream(newFileFullName, FileMode.Create);
            await image.CopyToAsync(stream);
            await stream.DisposeAsync();

            _imageResizeService.MakeImageSquare(newFileFullName);

            return new ImageUploadResult(true, string.Empty, newFileName);
        }
    }

    public struct ImageUploadResult
    {
        public bool Success { get; }

        public string Message { get; }

        public string NewFileName { get; }


        public ImageUploadResult(bool success, string message, string newFileName)
        {
            Success = success;
            Message = message;
            NewFileName = newFileName;
        }
    }
}
