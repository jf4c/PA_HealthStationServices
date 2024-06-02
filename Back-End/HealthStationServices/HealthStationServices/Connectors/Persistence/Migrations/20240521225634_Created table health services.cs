using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HealthStationServices.Connectors.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Createdtablehealthservices : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "health_services",
                schema: "fho_pa",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_health_services", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "health_services_health_station",
                schema: "fho_pa",
                columns: table => new
                {
                    HealthServicesId = table.Column<Guid>(type: "uuid", nullable: false),
                    HealthStationEntityId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_health_services_health_station", x => new { x.HealthServicesId, x.HealthStationEntityId });
                    table.ForeignKey(
                        name: "FK_health_services_health_station_health_services_Hea~",
                        column: x => x.HealthServicesId,
                        principalSchema: "fho_pa",
                        principalTable: "health_services",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_health_services_health_station_health_station_Heal~",
                        column: x => x.HealthStationEntityId,
                        principalSchema: "fho_pa",
                        principalTable: "health_station",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_health_services_health_station_HealthStationEntity~",
                schema: "fho_pa",
                table: "health_services_health_station",
                column: "HealthStationEntityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "health_services_health_station",
                schema: "fho_pa");

            migrationBuilder.DropTable(
                name: "health_services",
                schema: "fho_pa");
        }
    }
}
