using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HealthStationServices.Connectors.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "fho_pa");

            migrationBuilder.CreateTable(
                name: "address",
                schema: "fho_pa",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    state = table.Column<string>(type: "text", nullable: false),
                    city = table.Column<string>(type: "text", nullable: false),
                    district = table.Column<string>(type: "text", nullable: false),
                    logradouro = table.Column<string>(type: "text", nullable: false),
                    number = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_address", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "health_station",
                schema: "fho_pa",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    AddressId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_health_station", x => x.id);
                    table.ForeignKey(
                        name: "FK_health_station_address_AddressId",
                        column: x => x.AddressId,
                        principalSchema: "fho_pa",
                        principalTable: "address",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_health_station_AddressId",
                schema: "fho_pa",
                table: "health_station",
                column: "AddressId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "health_station",
                schema: "fho_pa");

            migrationBuilder.DropTable(
                name: "address",
                schema: "fho_pa");
        }
    }
}
