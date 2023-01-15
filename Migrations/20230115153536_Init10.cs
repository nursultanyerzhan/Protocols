using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Protocols.Migrations
{
    /// <inheritdoc />
    public partial class Init10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ProtocolPeriodicalTypeId",
                table: "ProtocolMissions",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProtocolPeriodicalTypeId",
                table: "ProtocolMissions");
        }
    }
}
