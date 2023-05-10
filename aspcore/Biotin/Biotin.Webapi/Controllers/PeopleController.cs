using Microsoft.AspNetCore.Mvc;
using Biotin.Domain;
using Microsoft.AspNetCore.Authorization;
using Biotin.Services;
using Biotin.Services.Dtos;

namespace Biotin.Webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class PeopleController : ControllerBase
{
    private readonly ILogger<PeopleController> _logger;
    private readonly IPersonService _personService;

    public PeopleController(ILogger<PeopleController> logger, IPersonService personService)
    {
        _logger = logger;
        _personService = personService;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<List<PersonOutputDto>> Get()
    {
        return await _personService.GetAll();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<PersonOutputDto>> GetById(Guid id)
    {
        var output = await _personService.GetById(id);

        if (output == null)
        {
            return NotFound();
        }

        return output;
    }

    [HttpPost()]
    public async Task<ActionResult<PersonOutputDto>> Create(PersonCreateInputDto input)
    {
        var entity = await _personService.Create(input);
        return entity;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(Guid id)
    {
        await _personService.DeleteById(id);
        return Ok(id);
    }
}

