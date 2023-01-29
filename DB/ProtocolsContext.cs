using Microsoft.EntityFrameworkCore;
using Protocols.DB.DBmodels;

namespace Protocols.DB;
public class ProtocolsContext : DbContext
{
    // public ProtocolsContext(DbContextOptions<ProtocolsContext> options) : base(options)
    // {

    // }

    public DbSet<ProtocolUser> ProtocolUsers => Set<ProtocolUser>();
    public DbSet<ProtocolDocument> ProtocolDocuments => Set<ProtocolDocument>();
    public DbSet<ProtocolExecutor> ProtocolExecutors => Set<ProtocolExecutor>();
    public DbSet<ProtocolMission> ProtocolMissions => Set<ProtocolMission>();
    public DbSet<ProtocolMissionGroup> ProtocolMissionGroups => Set<ProtocolMissionGroup>();
    public DbSet<ProtocolPeriodicalType> ProtocolPeriodicalTypes => Set<ProtocolPeriodicalType>();
    public DbSet<UserRoles> UserRoles => Set<UserRoles>();
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Data Source=SQL5063.site4now.net;Initial Catalog=db_a9221b_laylimyerjan;user id=db_a9221b_laylimyerjan_admin;password=E1551515515n;");
    }
}