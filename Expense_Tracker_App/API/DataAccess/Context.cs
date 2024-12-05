using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DataAccess
{
    public class Context : DbContext
    {
        public IConfiguration Configuration { get; }

        // Constructeur approprié
        public Context(DbContextOptions<Context> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }

        public DbSet<Transaction> Transactions { get; set; }

        // Optionnel : Vous pouvez supprimer OnConfiguring si vous configurez le DbContext via DI
        /*
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("DB"));
        }
        */

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configurations supplémentaires si nécessaire
        }
    }
}
