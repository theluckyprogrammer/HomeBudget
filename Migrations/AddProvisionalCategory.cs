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
            DBCC CHECKIDENT('[Categories]', RESEED, 0);
            ");   

            migrationBuilder.Sql(@"                                              
            INSERT INTO [dbo].[Categories]
                       ([Name])
                 VALUES
                       ('_template')  ;
            ");             
            
            migrationBuilder.AlterColumn<long>("CategoryId", "Objectives",  defaultValueSql: "1");

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
