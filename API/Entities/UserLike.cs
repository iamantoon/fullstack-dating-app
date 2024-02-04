namespace API.Entities
{
    public class UserLike
    {
        // This is going to act as a join table
        public AppUser SourceUser { get; set; }
        public int SourceUserId { get; set; }
        public AppUser TargetUser { get; set; }
        public int TargetUserId { get; set; }
    }
}