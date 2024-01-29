namespace API.Entities
{
    public class AppUser
    {
        // These properties represents columns in our database
        public int Id { get; set; } // EntityFramework needs these to be public
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}