using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public async Task<ActionResult<Villian>> Get(string id)
        {
            var villian = await _villianService.GetAsync(id);

            if (villian == null)
                return NotFound();

            return villian;
        }

        [HttpPost]
        public async Task<ActionResult<Villian>> Create(Villian villian)
        {
            await _villianService.Create(villian);

            return CreatedAtRoute("GetVillian", new { id = villian.Id.ToString() }, villian);
        }

        // TODO: add update and delete methods


    }
}
