using Biotin.Services;
using Biotin.Services.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Biotin.Webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class OrganisationsController : ControllerBase
{
    private readonly ILogger<OrganisationsController> _logger;
    private readonly IOrganisationService _organisationService;

    public OrganisationsController(ILogger<OrganisationsController> logger, IOrganisationService organisationService)
    {
        _logger = logger;
        _organisationService = organisationService;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<List<OrganisationOutputDto>> Get()
    {
        return await _organisationService.GetAll();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<OrganisationOutputDto>> GetById(Guid id)
    {
        var output = await _organisationService.GetById(id);

        if (output == null)
        {
            return NotFound();
        }

        return output;
    }
}

