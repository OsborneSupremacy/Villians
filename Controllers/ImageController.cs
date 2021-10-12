using Microsoft.AspNetCore.Mvc;
using System;
using Villians.Services;

namespace Villians.Controllers
{
    [ApiController]
    public class ImageController : Controller
    {
        private readonly ImageService _imageService;

        public ImageController(ImageService imageService)
        {
            _imageService = imageService ?? throw new ArgumentNullException(nameof(imageService));
        }

        [HttpGet()]
        [Route("api/image/{fileName}")]
        public IActionResult Get([FromRoute]string fileName)
        {
            var (imageFileStream, fileExtension) = _imageService.GetImage(fileName);
            return File(imageFileStream, $"image/{fileExtension}");
        }
    }
}
