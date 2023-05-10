using System;
using Biotin.Domain;
using Microsoft.EntityFrameworkCore;

namespace Biotin.EfCore.Repositories;

public interface IPersonRepository
{
    Task<List<Person>> GetAll();

    Task<Person> GetByIdAsync(Guid id);

    Task Delete(Person entity);

    Task Create(Person entity);
}

