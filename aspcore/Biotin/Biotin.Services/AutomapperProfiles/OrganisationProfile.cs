using System;
using AutoMapper;
using Biotin.Domain;
using Biotin.Services.Dtos;

namespace Biotin.Services.AutomapperProfiles
{
	public class OrganisationProfile: Profile
    {
        public OrganisationProfile()
        {
            CreateMap<Organisation, OrganisationOutputDto>();

        }
    }
}

