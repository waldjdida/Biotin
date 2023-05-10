using System;
using Biotin.Domain;
using Microsoft.EntityFrameworkCore;

namespace Biotin.EfCore.Repositories
{
	public class OrganisationRepository: IOrganisationRepository
    {
        private readonly BiotinDbContext _dbContext;

        public OrganisationRepository(BiotinDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Organisation> GetByIdAsync(Guid id)
        {
            return await _dbContext.Organisactions.SingleAsync(x => x.Id == id);
        }
        public async Task<List<Organisation>> GetAll()
        {
            var list = await _dbContext.Organisactions
                .AsNoTracking()
                .OrderByDescending(x => x.Name)
                .ToListAsync();

            return list;
        }
    }

    public interface IOrganisationRepository
    {
        Task<Organisation> GetByIdAsync(Guid id);
        Task<List<Organisation>> GetAll();
    }
}

