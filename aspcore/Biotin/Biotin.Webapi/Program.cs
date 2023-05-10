using Biotin.Services;
using Biotin.EfCore;
using Biotin.EfCore.Repositories;
using Microsoft.EntityFrameworkCore;
using Biotin.Services.AutomapperProfiles;

var builder = WebApplication.CreateBuilder(args);
string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var Configuration = builder.Configuration;

builder.Services.AddTransient<IPersonService, PersonService>();
builder.Services.AddTransient<IOrganisationService, OrganisationService>();

builder.Services.AddTransient<IPersonRepository, PersonRepository>();
builder.Services.AddTransient<IOrganisationRepository, OrganisationRepository>();

builder.Services.AddDbContext<BiotinDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));

builder.Services.AddAutoMapper(typeof(PersonProfile));

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:4200", "https://localhost:4200").
                          AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();

