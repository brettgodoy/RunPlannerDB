using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using System.Web.Services;
using System.Security;

public partial class Begin2 : System.Web.UI.Page
{
    

    //public static string DisplayName()
    //{
    //    Page page = new Page();
    //    var user = page.User;
    //    var UserId = user.Identity.Name;
    //    return UserId;
    //}

    //[WebMethod]
    //public static string SaveRunningData(decimal avgMile, string plan, int totalDistance, decimal avgFeeling)
    //{
    //    //var ApplicationName = ApplicationName;
    //    //var Description = Description;
    //    //var UserId = Begin2.DisplayName();
    //    var UserId = "Blah";

    //    System.Data.SqlClient.SqlConnection sqlConnection1 =
    //        new System.Data.SqlClient.SqlConnection("Data Source=(LocalDb)\\v11.0;AttachDbFilename='C:\\Users\\Brett\\Documents\\Visual Studio 2012\\WebSites\\Run Planner DB Calls\\App_Data\\aspnet-WebSite9-20130412211121.mdf';Initial Catalog=aspnet-WebSite9-20130412211121;Integrated Security=True");

    //    System.Data.SqlClient.SqlCommand cmd = new System.Data.SqlClient.SqlCommand("INSERT INTO RunningData (UserId, DateCreated, AvgMile, RunPlan, TotalDistance, AvgFeeling) VALUES (@UserId, GETDATE(), @AvgMile, @Plan, @TotalDistance, @AvgFeeling)");
    //    cmd.Connection = sqlConnection1;

    //    cmd.Parameters.Add("@UserId", SqlDbType.NVarChar);
    //    cmd.Parameters.Add("@AvgMile", SqlDbType.Decimal);
    //    cmd.Parameters.Add("@Plan", SqlDbType.NVarChar);
    //    cmd.Parameters.Add("@TotalDistance", SqlDbType.NVarChar);
    //    cmd.Parameters.Add("@AvgFeeling", SqlDbType.Decimal);

    //    cmd.Parameters["@UserId"].Value = UserId;
    //    cmd.Parameters["@AvgMile"].Value = avgMile;
    //    cmd.Parameters["@Plan"].Value = plan;
    //    cmd.Parameters["@TotalDistance"].Value = totalDistance;
    //    cmd.Parameters["@AvgFeeling"].Value = avgFeeling;

    //    sqlConnection1.Open();
    //    cmd.ExecuteNonQuery();
    //    sqlConnection1.Close();

    //    return UserId.ToString();
    //}
}