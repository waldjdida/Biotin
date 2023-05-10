using System;
namespace Biotin.Services.Dtos
{
	public record OrganisationOutputDto
	{
		public Guid Id { get; set; }
		public string Name { get; set; } = null!;
    }
}

