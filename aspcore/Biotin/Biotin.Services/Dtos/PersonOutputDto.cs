using System;
namespace Biotin.Services.Dtos
{
	public record PersonOutputDto
	{
		public Guid Id { get; set; }
		public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
		public string OrganisationName { get; set; } = null!;
    }
}

