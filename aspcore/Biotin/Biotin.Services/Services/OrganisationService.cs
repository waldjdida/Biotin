using System;
using AutoMapper;
using Biotin.Domain;
using Biotin.EfCore.Repositories;
using Biotin.Services.Dtos;

namespace Biotin.Services
{
    public class OrganisationService : IOrganisationService
    {
        private readonly IOrganisationRepository _organisationRepository;
        private readonly IMapper _mapper;

        public OrganisationService(IPersonRepository personRepository, IMapper mapper, IOrganisationRepository organisationRepository)
        {
            _mapper = mapper;
            _organisationRepository = organisationRepository;
        }

        public async Task<List<OrganisationOutputDto>> GetAll()
        {
            var list = await _organisationRepository.GetAll();
            return _mapper.Map<List<OrganisationOutputDto>>(list);
        }

        public async Task<OrganisationOutputDto> GetById(Guid id)
        {
            var entity = await _organisationRepository.GetByIdAsync(id);
            return _mapper.Map<OrganisationOutputDto>(entity);
        }
    }


    public interface IOrganisationService
    {
        Task<OrganisationOutputDto> GetById(Guid id);
        Task<List<OrganisationOutputDto>> GetAll();
    }
}

