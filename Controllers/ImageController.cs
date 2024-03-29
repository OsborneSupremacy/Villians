﻿namespace Villians.Controllers;

[ApiController]
public class ImageController : Controller
{
    private readonly ImageService _imageService;

    public ImageController(ImageService imageService)
    {
        _imageService = imageService ?? throw new ArgumentNullException(nameof(imageService));
    }

    [HttpGet()]
    [Route("api/image/get/{fileName}")]
    public FileStreamResult Get([FromRoute] string fileName)
    {
        var (imageFileStream, fileExtension) = _imageService.GetImage(fileName);
        return File(imageFileStream, $"image/{fileExtension}");
    }

    [HttpPost]
    [Route("api/image/upload")]
    [RequestSizeLimit(20000000)]
    [ProducesResponseType(typeof(ActionResult<ImageUploadResult>), StatusCodes.Status200OK)]
    public async Task<ActionResult<ImageUploadResult>> UploadAsync([FromForm] IFormFile image)
    {
        if (image == null)
            return new BadRequestResult();

        var result = await _imageService.UploadImageAsync(image);

        if (!result.Success)
            return new BadRequestObjectResult(result.Message);

        return new OkObjectResult(result);
    }
}
