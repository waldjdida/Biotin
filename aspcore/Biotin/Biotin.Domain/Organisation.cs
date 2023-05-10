namespace Biotin.Domain;

public class Organisation
{
	public Guid Id { get; private set; }
	public string Name { get; private set; } = null!;
	public virtual ICollection<Person> People { get; set; } = null!;

	public static Organisation Create(string name)
	{
		return new Organisation
		{
			Id = Guid.NewGuid(),
			Name = name
		};
	}
}

