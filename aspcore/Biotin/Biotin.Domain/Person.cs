namespace Biotin.Domain;
public class Person
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string Lastname { get; set; } = null!;

    public Organisation Organisation { get; set; } = null!;
    public Guid OrganisationId { get; set; }

    public static Person Create(string firstName, string lastName, Organisation organisation)
    {
        return new Person
        {
            Id = Guid.NewGuid(),
            FirstName = firstName,
            Lastname = lastName,
            Organisation = organisation,
            OrganisationId = organisation.Id
        };
    }
}

