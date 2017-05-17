using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HomeBudget.Migrations
{
    public partial class AddProvisionalCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(name: "IX_Objectives_CategoryId", table: "Objectives");

            migrationBuilder.Sql(@"                                              
            DBCC CHECKIDENT('[Categories]', RESEED, 1);
            ");

            migrationBuilder.Sql(@"                                              
            SET IDENTITY_INSERT [dbo].[Categories] ON ;
            ");
           
            migrationBuilder.Sql(@"                                              
            INSERT INTO [dbo].[Categories]
                       ([Id], [Name])
                 VALUES
                       (0, '_template')  ;
            ");

            migrationBuilder.Sql(@"                                              
            SET IDENTITY_INSERT [dbo].[Categories] OFF ;
            ");

            migrationBuilder.AlterColumn<long>("CategoryId", "Objectives",  defaultValueSql: "0");

            migrationBuilder.CreateIndex(
             name: "IX_Objectives_CategoryId",
             table: "Objectives",
             column: "CategoryId");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
           
        }
    }
}
