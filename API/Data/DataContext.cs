using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext // DbContext class is going to allow us to have a session with our database
    {
        // When a new instance of our data context is created, then this constructor is going to be called and 
        // it's going to look for the options that we provide
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
    }
}