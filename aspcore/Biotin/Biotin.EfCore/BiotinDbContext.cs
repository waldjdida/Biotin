using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;
using Biotin.Domain;
namespace Biotin.EfCore;

public class BiotinDbContext: DbContext
{

    public DbSet<Person> People { get; set; }
    public DbSet<Organisation> Organisactions { get; set; }

    public BiotinDbContext(DbContextOptions<BiotinDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Organisation>(b =>
        {
            b.ToTable("AppOrganisations");
            b.HasKey(x => x.Id);

            b.HasMany(x => x.People)
                .WithOne(x => x.Organisation)
                .HasForeignKey(x => x.OrganisationId);

        });

        builder.Entity<Person>(b =>
        {
            b.ToTable("AppPersons");
            b.HasKey(x => x.Id);

            b.HasOne(x => x.Organisation)
                .WithMany(x => x.People)
                .HasForeignKey(x => x.OrganisationId);
        });
    }
}

