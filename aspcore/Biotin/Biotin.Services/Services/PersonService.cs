using System;
using AutoMapper;
using Biotin.Domain;
using Biotin.EfCore.Repositories;
using Biotin.Services.Dtos;

namespace Biotin.Services
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;
        private readonly IOrganisationRepository _organisationRepository;
        private readonly IMapper _mapper;

        public PersonService(IPersonRepository personRepository, IMapper mapper, IOrganisationRepository organisationRepository)
        {
            _personRepository = personRepository;
            _mapper = mapper;
            _organisationRepository = organisationRepository;
        }

        public async Task<PersonOutputDto> Create(PersonCreateInputDto input)
        {
            var organisation = await _organisationRepository.GetByIdAsync(input.OrganisationId);

            var entity = Domain.Person.Create(input.FirstName, input.LastName, organisation);

            await _personRepository.Create(entity);

            return _mapper.Map<PersonOutputDto>(entity);
        }

        public async Task DeleteById(Guid id)
        {
            var entity = await _personRepository.GetByIdAsync(id);
            await _personRepository.Delete(entity);
        }

        public async Task<List<PersonOutputDto>> GetAll()
        {
            var list = await _personRepository.GetAll();
            return _mapper.Map<List<PersonOutputDto>>(list);
        }

        public async Task<PersonOutputDto> GetById(Guid id)
        {
            var entity = await _personRepository.GetByIdAsync(id);
            return _mapper.Map<PersonOutputDto>(entity);
        }
    }


    public interface IPersonService
    {
        Task DeleteById(Guid id);
        Task<List<PersonOutputDto>> GetAll();
        Task<PersonOutputDto> GetById(Guid id);
        Task<PersonOutputDto> Create(PersonCreateInputDto input);
    }
}

