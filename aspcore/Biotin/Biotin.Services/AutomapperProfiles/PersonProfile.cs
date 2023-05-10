using System;
using System;
using AutoMapper;
using Biotin.Domain;
using Biotin.Services.Dtos;

namespace Biotin.Services.AutomapperProfiles
{
	public class PersonProfile: Profile
    {
        public PersonProfile()
        {
            CreateMap<Person, PersonOutputDto>();
        }
    }
}

