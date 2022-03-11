using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Villians.Models;
using Villians.Services;

namespace Villians.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VillianController : Controller
    {
        private readonly VillianService _villianService;

        public VillianController(VillianService villianService)
        {
            _villianService = villianService ?? throw new ArgumentNullException(nameof(villianService));
        }

        [HttpGet]
        public async Task<ActionResult<List<Villian>>> Get() =>
            await _villianService.GetAsync();

        [HttpGet("{id:length(24)}", Name = "GetVillian")]
        [ProducesResponseType(typeof(ActionResult<ImageUploadResult>), StatusCodes.Status200OK)]
        public async Task<ActionResult<Villian>> GetAsync(string id)
        {
            var villian = await _villianService.GetAsync(id);

            if (villian == null)
                return NotFound();

            return villian;
        }

        [HttpPost]
        [ProducesResponseType(typeof(CreatedAtRouteResult), StatusCodes.Status200OK)]
        public async Task<ActionResult<Villian>> CreateAsync(Villian villianIn)
        {
            var villianOut = await _villianService.Create(villianIn);
            return CreatedAtRoute("GetVillian", new { id = villianOut.Id.ToString() }, villianOut);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> UpdateAsync(string id, Villian villianIn)
        {
            var villian = await _villianService.GetAsync(id);

            // ID can't be updated
            villianIn.Id = id;

            if (villian == null)
                return NotFound();

            await _villianService.UpdateAsync(id, villianIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> DeleteAsync(string id)
        {
            var villian = await _villianService.GetAsync(id);

            if (villian != null)
                await _villianService.RemoveAsync(villian.Id);

            return NoContent();
        }

    }
}
