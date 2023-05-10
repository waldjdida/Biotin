using System;
using Biotin.Domain;
using Microsoft.EntityFrameworkCore;

namespace Biotin.EfCore.Repositories
{
	public class PersonRepository: IPersonRepository
    {
        private readonly BiotinDbContext _dbContext;

        public PersonRepository(BiotinDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Person>> GetAll()
        {
            var data =  await _dbContext.People
                .AsNoTracking()
                .Include(x=>x.Organisation)
                .OrderByDescending(x => x.FirstName)
                .ToListAsync();

            return data;
        }

        public async Task<Person> GetByIdAsync(Guid id)
        {
            return await _dbContext.People.SingleAsync(x => x.Id == id);
        }

        public async Task Delete(Person entity)
        {      
            _dbContext.People.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task Create(Person entity)
        {
            if (entity != null)
            {
                _dbContext.People.Add(entity);
                await _dbContext.SaveChangesAsync();
            }
        }
}
}

