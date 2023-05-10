using System;
namespace Biotin.Services.Dtos
{
	public record PersonCreateInputDto
	{
		public string FirstName { get; set; } = null!;
		public string LastName { get; set; } = null!;
		public Guid OrganisationId { get; set; }
	}
}

